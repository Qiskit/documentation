#![deny(clippy::all)]

use markdown::mdast::{AttributeContent, AttributeValue, Html, MdxJsxTextElement};
use markdown::{mdast::Node, to_mdast, ParseOptions, Constructs};
use napi_derive::napi;
use std::collections::HashSet;

#[napi]
pub fn parse_links(markdown: String, file_name: String) -> (Vec<String>, Vec<String>) {
  let options = ParseOptions {
    constructs: Constructs {
      gfm_autolink_literal: true,
      gfm_footnote_definition: true,
      gfm_label_start_footnote: true,
      gfm_strikethrough: true,
      gfm_table: true,
      gfm_task_list_item: true,
      math_flow: true,
      math_text: true,
      mdx_jsx_flow: true,
      mdx_jsx_text: true,
      ..Constructs::mdx()
    },
    ..ParseOptions::mdx()
  };

  let ast = match to_mdast(markdown.as_str(), &options) {
    Ok(ast) => ast,
    Err(m) => panic!("Error parsing file: {}\n{}", file_name, m),
  };

  let mut links = HashSet::<String>::default();
  extract_from_node(&ast, &mut links);

  let mut internal_links = vec![];
  let mut external_links = vec![];
  for link in links.into_iter() {
    if link.starts_with("mailto") {
      continue;
    };
    if link.starts_with("http") {
      external_links.push(link)
    } else {
      internal_links.push(link)
    }
  }
  return (internal_links, external_links);
}

fn extract_from_node(node: &Node, links: &mut HashSet<String>) {
  let maybe_link = match node {
    Node::Image(img) => Some(img.url.clone()),
    Node::Link(link) => Some(link.url.clone()),
    Node::MdxJsxTextElement(el) => extract_jsx_text_element(el),
    _ => None,
  };

  if let Some(link) = maybe_link {
    links.insert(link.clone());
  }

  if let Some(children) = node.children() {
    for child in children {
      extract_from_node(child, links);
    }
  }
}

fn extract_jsx_text_element(el: &MdxJsxTextElement) -> Option<String> {
  let href_attr = el.attributes.iter().find_map(|attr| match attr {
    AttributeContent::Property(p) => {
      if p.name == "href" {
        Some(p.value.clone())
      } else {
        None
      }
    }
    _ => None,
  })??;
  match href_attr {
    AttributeValue::Literal(s) => Some(s),
    _ => None,
  }
}
