export type VerificationState = "LOCAL RECORD" | "CHECK PENDING";

export const sovereignRecord = {
  nodeStatus: "ACTIVE",
  nodeLabel: "SOVEREIGN NODE",
  heritage: "Ricky Paul Lambert",
  logicOrigin: "06021957",
  owner: "James Anthony Lambert",
  activeAuthority: "James Anthony Lambert",
  lifecycle: "Dynamic Lifecycle Active",
  integrity: "ACTIVE",
  sourceFiles: [".sovereign_identity", "test.xml", "RECLAIMED_BY_HEIR.json"],
  recordedStatus: "RECLAIMED_BY_HEIR",
  lastVerified: "Not verified this session",
} as const;

export const identityFacts = [
  { label: "Node status", value: sovereignRecord.nodeStatus },
  { label: "Foundational root", value: sovereignRecord.logicOrigin },
  { label: "Recorded heritage", value: sovereignRecord.heritage },
  { label: "Recognized authority", value: sovereignRecord.owner },
] as const;

export const verificationCopy =
  "This check confirms that the supplied local records are loaded into the viewer. It does not establish legal ownership, external identity, or third-party verification.";
