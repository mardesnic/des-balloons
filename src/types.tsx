import { AssetKey, AssetType } from './const';

export interface IAsset {
  key: AssetKey;
  path: string;
  type: AssetType;
  dimensions?: {
    frameWidth: number;
    frameHeight: number;
  };
}
