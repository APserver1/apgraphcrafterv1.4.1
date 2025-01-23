export type AspectRatio = '1:1' | '3:4' | '5:3' | '16:9';
export type ImagePosition = 'behind' | 'front';
export type LabelPosition = 'behind' | 'inside';
export type BarAnimationType = 'instant' | 'transition';
export type BarJumpType = 'instant' | 'smooth';
export type ImageShape = 'circle' | 'square' | 'rectangle' | 'original' | 'custom';
export type EmptyCellHandling = 'zero' | 'interpolate';
export type EmbeddingPosition = 'front' | 'behind';
export type FlipStyle = 'none' | 'imageVertical' | 'imageHorizontal' | 'borderVertical' | 'borderHorizontal';

export const ASPECT_RATIOS: Record<AspectRatio, number> = {
  '1:1': 1,
  '3:4': 3/4,
  '5:3': 5/3,
  '16:9': 16/9,
};

export interface EmbeddedImage {
  url: string;
  width: number;
  height: number;
  position: EmbeddingPosition;
  margins: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface EmbeddedText {
  content: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  position: EmbeddingPosition;
  margins: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface EmbeddingsSettings {
  enabled: boolean;
  images: EmbeddedImage[];
  texts: EmbeddedText[];
}

export interface CarouselSettings {
  enabled: boolean;
  width: number;
  height: number;
  margins: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  images: Record<string, string>;
}

export interface TextCarouselSettings {
  enabled: boolean;
  fontSize: number;
  fontFamily: string;
  color: string;
  margins: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  texts: Record<string, string>;
}

export interface ChartSettings {
  aspectRatio: AspectRatio;
  margins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  bars: {
    maxCount: number;
    spacing: number;
    descendingWidth: boolean;
    descendingRatio: number;
    descendingHeight: boolean;
    heightRatio: number;
    keepSpacing: boolean;
    useCustomSpacing: boolean;
    customSpacing: number[];
    animationType: BarAnimationType;
    roundedCorners: {
      enabled: boolean;
      radius: number;
    };
  };
  values: {
    showAtEnd: boolean;
    emptyCellHandling: EmptyCellHandling;
    color: string;
  };
  images: {
    position: ImagePosition;
    size: number;
    spacing: number;
    descendingWidth: boolean;
    widthRatio: number;
    descendingHeight: boolean;
    heightRatio: number;
    border: {
      enabled: boolean;
      width: number;
      spacing: number;
      descendingWidth: boolean;
      widthRatio: number;
      descendingSpacing: boolean;
      spacingRatio: number;
    };
  };
  labels: {
    position: LabelPosition;
    color: string;
    fontFamily: string;
    size: number;
    spacing: number;
    descendingSize: boolean;
    sizeRatio: number;
    invisible: boolean;
  };
  timeline: {
    duration: number;
    loop: boolean;
    loopDelayBefore: number;
    loopDelayAfter: number;
  };
  animations: {
    barJump: BarJumpType;
    jumpDuration: number;
    entryDuration: number;
    flipStyle: FlipStyle;
  };
  dateDisplay: {
    show: boolean;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    fontSize: number;
    color: string;
    margins: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    backgroundColor: string | null;
  };
  imageColumn: {
    enabled: boolean;
    position: 'left' | 'right';
    imageShape: ImageShape;
    size: number;
    spacing: number;
    descendingSize: boolean;
    sizeRatio: number;
    useCustomSpacing: boolean;
    customSpacing: number[];
    customWidth: number;
    customHeight: number;
    margins: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    defaultImage: string;
    images: Record<string, string>;
  };
  background: {
    enabled: boolean;
    color: string;
  };
  embeddings: EmbeddingsSettings;
  carousel: CarouselSettings;
  textCarousel: TextCarouselSettings;
}