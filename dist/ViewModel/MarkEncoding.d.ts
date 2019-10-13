import { FieldDef, MarkPropFieldDef, ValueDef } from 'vega-lite/build/src/channeldef';
export declare type PositionEncoding = 'x' | 'y' | 'x2' | 'y2';
export declare const positionEncodings: PositionEncoding[];
export declare type GeographicPositionEncoding = 'longitude' | 'latitude';
export declare const geographicPositionEncodings: GeographicPositionEncoding[];
export declare type MarkPropertiesChannelEncoding = 'filled' | 'color' | 'fill' | 'stroke' | 'opacity' | 'fillOpacity' | 'strokeOpacity' | 'size' | 'shape' | 'strokeCap' | 'strokeDash' | 'strokeDashOffset' | 'strokeJoin' | 'strokeMiterLimit' | 'strokeWidth';
export declare const markPropertiesChannelEncodings: MarkPropertiesChannelEncoding[];
export declare type TextTooltipChannelEncoding = 'text' | 'tooltip';
export declare const textTooltipChannelEncodings: TextTooltipChannelEncoding[];
export declare type HyperLinkChannelEncoding = 'href' | 'cursor';
export declare const hyperLinkChannelEncodings: HyperLinkChannelEncoding[];
export declare type KeyChannelEncoding = 'key';
export declare const keyChannelEncodings: KeyChannelEncoding[];
export declare type OrderChannelEncoding = 'order';
export declare const orderChannelEncodings: OrderChannelEncoding[];
export declare type LoDChannelEncoding = 'detail';
export declare const loDChannelEncodings: LoDChannelEncoding[];
export declare type FacetChannelEncoding = 'facet' | 'row' | 'column';
export declare const facetChannelEncodings: FacetChannelEncoding[];
export declare type MarkEncoding = PositionEncoding | GeographicPositionEncoding | MarkPropertiesChannelEncoding | TextTooltipChannelEncoding | HyperLinkChannelEncoding | KeyChannelEncoding | OrderChannelEncoding | LoDChannelEncoding | FacetChannelEncoding;
export declare const markEncodings: MarkEncoding[];
export declare type MarkEncodingGroup = 'position' | 'geographic' | 'mark property' | 'text tooltip' | 'hyperlink' | 'key channel' | 'order channel' | 'lod channel' | 'facet channel';
export declare const markEncodingGroups: MarkEncodingGroup[];
export declare type EncodingsType = FieldDef<any> | ValueDef | MarkPropFieldDef<any>;