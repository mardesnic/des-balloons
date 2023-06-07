import Phaser from 'phaser';
import {
  AssetKey,
  AssetType,
  assets,
  balloonProperties,
  cloudProperties,
  fireworkProperties,
} from '../const';

export default class BalloonScene extends Phaser.Scene {
  balloons!: Phaser.Physics.Arcade.Group;
  clouds!: Phaser.Physics.Arcade.Group;
  thunderClouds!: Phaser.Physics.Arcade.Group;
  fireworks!: Phaser.Physics.Arcade.Group;

  constructor() {
    super('BalloonScene');
  }

  preload() {
    assets.forEach((asset) => {
      if (asset.type === AssetType.AUDIO) {
        this.load.audio(asset.key, asset.path);
      }
      if (asset.type === AssetType.SPRITE_SHEET) {
        this.load.spritesheet(asset.key, asset.path, asset.dimensions);
      }
    });
  }

  create() {
    const music = this.sound.add(AssetKey.BACKGROUND_MUSIC, {
      volume: 0.5,
      loop: true,
    });
    music.play();
    balloonProperties.forEach((balloon) => {
      this.anims.create({
        key: balloon.floatAnimationKey,
        frames: this.anims.generateFrameNumbers(balloon.assetKey, {
          start: 0,
          end: 2,
        }),
        frameRate: 5,
        repeat: -1,
      });
      this.anims.create({
        key: balloon.popAnimationKey,
        frames: this.anims.generateFrameNumbers(balloon.assetKey, {
          start: 3,
          end: 5,
        }),
        frameRate: 10,
      });
    });
    cloudProperties.forEach((cloud) => {
      this.anims.create({
        key: cloud.animationKey,
        frames: [{ key: cloud.assetKey, frame: cloud.frame }],
        frameRate: cloud.frame,
      });
    });
    fireworkProperties.forEach((firework) => {
      this.anims.create({
        key: firework.key,
        frames: this.anims.generateFrameNumbers(
          firework.assetKey,
          firework.frames
        ),
        frameRate: firework.frameRate,
        repeat: firework.repeat,
      });
    });
    this.time.addEvent({
      delay: 2000,
      callback: this.createBalloon,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 3000,
      callback: this.createCloud,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 20000,
      callback: this.createThunderCloud,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 13000,
      callback: this.createFirework,
      callbackScope: this,
      loop: true,
    });
    this.balloons = this.physics.add.group();
    this.clouds = this.physics.add.group();
    this.thunderClouds = this.physics.add.group();
    this.fireworks = this.physics.add.group();
  }

  createBalloon() {
    const balloonColor = Phaser.Math.RND.pick(balloonProperties);

    const balloon = this.physics.add.sprite(
      Phaser.Math.Between(50, this.scale.width - 50),
      this.scale.height + 50,
      balloonColor.assetKey
    );

    this.balloons.add(balloon);
    balloon.setScale(3);
    balloon.play(balloonColor.floatAnimationKey);
    balloon.setVelocity(0, Phaser.Math.Between(-100, -200));

    balloon.setInteractive().on('pointerdown', () => {
      balloon.removeListener('pointerdown');
      balloon.play(balloonColor.popAnimationKey);
      this.sound.play(AssetKey.POP);
      balloon.once('animationcomplete', () => {
        balloon.destroy();
      });
    });
  }

  createFirework() {
    const firework = this.physics.add.sprite(
      Phaser.Math.Between(50, this.scale.width - 50),
      this.scale.height + 50,
      AssetKey.ROCKET
    );

    this.fireworks.add(firework);
    firework.setScale(0.5);
    firework.play(`${AssetKey.ROCKET}-FLY`);
    firework.setVelocity(0, Phaser.Math.Between(-200, -300));
    this.sound.play(AssetKey.ROCKET_SOUND);

    firework.setInteractive().on('pointerdown', () => {
      firework.removeListener('pointerdown');
      firework.setScale(1);
      firework.setVelocity(0);
      firework.play(`${AssetKey.ROCKET}-POP`);
      this.sound.play(AssetKey.BOOM);
      firework.once('animationcomplete', () => {
        firework.destroy();
      });
    });
  }

  createCloud() {
    const cloud = this.physics.add.sprite(
      -50,
      Phaser.Math.Between(50, this.game.renderer.height / 3),
      AssetKey.CLOUD
    );
    cloud.play(`${AssetKey.CLOUD}-WHITE`);
    cloud.setScale(0.6);
    cloud.setVelocityX(Phaser.Math.Between(50, 100));
    cloud.setInteractive().on('pointerdown', () => {
      cloud.removeListener('pointerdown');
      this.sound.play(AssetKey.WOOSH);
      cloud.setVelocityX(600);
    });
  }

  createThunderCloud() {
    const thunderCloud = this.physics.add.sprite(
      -50,
      Phaser.Math.Between(50, this.game.renderer.height / 3),
      AssetKey.CLOUD
    );
    thunderCloud.setScale(0.6);
    thunderCloud.setVelocityX(Phaser.Math.Between(50, 100));
    thunderCloud.play(`${AssetKey.CLOUD}-GRAY`);
    thunderCloud.setInteractive().on('pointerdown', () => {
      thunderCloud.removeListener('pointerdown');
      this.sound.play(AssetKey.THUNDER);
      thunderCloud.setVelocityX(600);
      thunderCloud.play(`${AssetKey.CLOUD}-THUNDER`);
      this.time.delayedCall(200, () => {
        thunderCloud.play(`${AssetKey.CLOUD}-WHITE`);
      });
    });
  }

  update() {
    Phaser.Actions.Call(
      this.balloons.getChildren(),
      function (item) {
        const balloon = item as Phaser.Physics.Arcade.Sprite;
        if (balloon.y + balloon.height < 0) {
          balloon.destroy();
        }
      },
      this
    );
    Phaser.Actions.Call(
      this.fireworks.getChildren(),
      function (item) {
        const firework = item as Phaser.Physics.Arcade.Sprite;
        if (firework.y + firework.height < 0) {
          firework.destroy();
        }
      },
      this
    );
    Phaser.Actions.Call(
      this.clouds.getChildren(),
      (item) => {
        const cloud = item as Phaser.Physics.Arcade.Sprite;
        if (cloud.x - cloud.width > this.game.renderer.width) {
          cloud.destroy();
        }
      },
      this
    );
    Phaser.Actions.Call(
      this.thunderClouds.getChildren(),
      (item) => {
        const thunderCloud = item as Phaser.Physics.Arcade.Sprite;
        if (thunderCloud.x - thunderCloud.width > this.game.renderer.width) {
          thunderCloud.destroy();
        }
      },
      this
    );
  }
}
