/**
 * Layout engines supported by Graphviz.
 */
export type GraphvizEngine =
  | 'dot'
  | 'neato'
  | 'fdp'
  | 'sfdp'
  | 'circo'
  | 'twopi'
  | 'osage'
  | 'patchwork';

/**
 * Output formats supported by Graphviz.
 */
export type GraphvizFormat =
  | 'svg'
  | 'png'
  | 'pdf'
  | 'ps'
  | 'json'
  | 'dot'
  | 'xdot'
  | 'plain';

/**
 * Render result for text formats (svg, json, dot, xdot, plain).
 */
export interface TextRenderResult {
  type: 'text';
  data: string;
}

/**
 * Render result for binary formats (png, pdf, ps) - base64 encoded.
 */
export interface BinaryRenderResult {
  type: 'binary';
  data: string; // base64
}

export type RenderResult = TextRenderResult | BinaryRenderResult;
