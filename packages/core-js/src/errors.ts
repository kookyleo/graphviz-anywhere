/**
 * Error codes returned by the native Graphviz module.
 */
export const GraphvizErrorCode = {
  NULL_INPUT: 'NULL_INPUT',
  INVALID_DOT: 'INVALID_DOT',
  LAYOUT_FAILED: 'LAYOUT_FAILED',
  RENDER_FAILED: 'RENDER_FAILED',
  INVALID_ENGINE: 'INVALID_ENGINE',
  INVALID_FORMAT: 'INVALID_FORMAT',
  OUT_OF_MEMORY: 'OUT_OF_MEMORY',
  NOT_INITIALIZED: 'NOT_INITIALIZED',
  UNKNOWN: 'UNKNOWN',
} as const;

export type GraphvizErrorCodeType =
  (typeof GraphvizErrorCode)[keyof typeof GraphvizErrorCode];
