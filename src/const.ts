import { IAsset } from './types';

export const EMAIL = 'marin.desnica@gmail.com';
export const GITHUB = 'https://github.com/mardesnic';
export const TWITTER = 'https://twitter.com/daisho13th';
export const WEBSITE = 'https://mardesnic.github.io/';
export const NAME = 'Marin Desnica';
export const APP_NAME = `<Balloons />`;

export enum AssetType {
  SPRITE_SHEET,
  AUDIO,
}

export enum AssetKey {
  POP = 'POP',
  BACKGROUND_MUSIC = 'BACKGROUND_MUSIC',
  WOOSH = 'WOOSH',
  BLUE_BALLOON = 'BLUE_BALLOON',
  GREEN_BALLOON = 'GREEN_BALLOON',
  YELLOW_BALLOON = 'YELLOW_BALLOON',
  RED_BALLOON = 'RED_BALLOON',
  PURPLE_BALLOON = 'PURPLE_BALLOON',
  CLOUD = 'CLOUD',
  THUNDER = 'CLOUD',
  FIREWORK = 'FIREWORK',
  ROCKET = 'ROCKET',
  BOOM = 'BOOM',
  ROCKET_SOUND = 'ROCKET_SOUND',
}

export const assets: IAsset[] = [
  {
    type: AssetType.AUDIO,
    key: AssetKey.POP,
    path: 'assets/balloons/pop.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.BACKGROUND_MUSIC,
    path: 'assets/music.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.WOOSH,
    path: 'assets/cloud/woosh.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.THUNDER,
    path: 'assets/cloud/thunder.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.ROCKET_SOUND,
    path: 'assets/firework/rocket.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.BOOM,
    path: 'assets/firework/boom.mp3',
  },
  {
    type: AssetType.AUDIO,
    key: AssetKey.WOOSH,
    path: 'assets/firework/woosh.mp3',
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.BLUE_BALLOON,
    path: 'assets/balloons/blue.png',
    dimensions: {
      frameWidth: 16,
      frameHeight: 31.5,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.GREEN_BALLOON,
    path: 'assets/balloons/green.png',
    dimensions: {
      frameWidth: 16,
      frameHeight: 31.5,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.YELLOW_BALLOON,
    path: 'assets/balloons/yellow.png',
    dimensions: {
      frameWidth: 16,
      frameHeight: 31.5,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.RED_BALLOON,
    path: 'assets/balloons/red.png',
    dimensions: {
      frameWidth: 16,
      frameHeight: 31.5,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.PURPLE_BALLOON,
    path: 'assets/balloons/purple.png',
    dimensions: {
      frameWidth: 16,
      frameHeight: 31.5,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.CLOUD,
    path: 'assets/cloud/sprite.png',
    dimensions: {
      frameWidth: 170,
      frameHeight: 139,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.FIREWORK,
    path: 'assets/firework/firework.png',
    dimensions: {
      frameWidth: 300,
      frameHeight: 250,
    },
  },
  {
    type: AssetType.SPRITE_SHEET,
    key: AssetKey.ROCKET,
    path: 'assets/firework/rocket.png',
    dimensions: {
      frameWidth: 160,
      frameHeight: 260,
    },
  },
];

export const balloonProperties = [
  {
    assetKey: AssetKey.BLUE_BALLOON,
    floatAnimationKey: 'blue-balloon-float',
    popAnimationKey: 'blue-balloon-pop',
  },
  {
    assetKey: AssetKey.GREEN_BALLOON,
    floatAnimationKey: 'green-balloon-float',
    popAnimationKey: 'green-balloon-pop',
  },
  {
    assetKey: AssetKey.RED_BALLOON,
    floatAnimationKey: 'red-balloon-float',
    popAnimationKey: 'red-balloon-pop',
  },
  {
    assetKey: AssetKey.YELLOW_BALLOON,
    floatAnimationKey: 'yellow-balloon-float',
    popAnimationKey: 'yellow-balloon-pop',
  },
  {
    assetKey: AssetKey.PURPLE_BALLOON,
    floatAnimationKey: 'purple-balloon-float',
    popAnimationKey: 'purple-balloon-pop',
  },
];

export const cloudProperties = [
  {
    assetKey: AssetKey.CLOUD,
    animationKey: `${AssetKey.CLOUD}-WHITE`,
    frame: 0,
    frameRate: 5,
  },
  {
    assetKey: AssetKey.CLOUD,
    animationKey: `${AssetKey.CLOUD}-GRAY`,
    frame: 1,
    frameRate: 5,
  },
  {
    assetKey: AssetKey.CLOUD,
    animationKey: `${AssetKey.CLOUD}-THUNDER`,
    frame: 2,
    frameRate: 5,
  },
];

export const fireworkProperties = [
  {
    key: `${AssetKey.ROCKET}-FLY`,
    assetKey: AssetKey.ROCKET,
    frames: {
      start: 0,
      end: 3,
    },
    frameRate: 5,
    repeat: -1,
  },
  {
    key: `${AssetKey.ROCKET}-POP`,
    assetKey: AssetKey.FIREWORK,
    frames: {
      start: 0,
      end: 3,
    },
    frameRate: 10,
  },
];
