from __future__ import annotations
import re


def slug_from_id(dotted_id: str, pkg_slug: str) -> str:
    """Convert a dotted Python id to a URL slug, mirroring kebabCaseAndShortenPage.

    "qiskit_ibm_runtime.EstimatorV2" + "qiskit-ibm-runtime" -> "estimator-v2"
    "qiskit_ibm_runtime"             + "qiskit-ibm-runtime" -> "qiskit-ibm-runtime"
    """
    kebab = re.sub(r'([a-z\d])([A-Z])', r'\1-\2',
             re.sub(r'([A-Z]+)([A-Z][a-z])', r'\1-\2',
             dotted_id)).replace('_', '-').replace('.', '-').lower()
    kebab = re.sub(r'-v-(\d+)', r'-v\1', kebab)
    if kebab != pkg_slug:
        kebab = kebab.replace(f'{pkg_slug}-', '', 1)
    return kebab
