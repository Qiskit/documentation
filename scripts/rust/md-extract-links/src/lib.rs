#![deny(clippy::all)]

use markdown::mdast::{AttributeContent, AttributeValue, MdxJsxTextElement};
use markdown::{mdast::Node, to_mdast, Constructs, ParseOptions};
use napi::Error;
use napi_derive::napi;
use std::collections::HashSet;

#[napi]
pub fn extract_links(markdown: String) -> Result<Vec<String>, Error> {
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
    Err(m) => return Err(Error::from_reason(m.to_string())),
  };

  let mut links = HashSet::<String>::default();
  extract_from_node(&ast, &mut links);

  Ok(links.into_iter().collect())
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
