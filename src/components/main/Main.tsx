import React, { useEffect, useState } from 'react';
import { Navbar } from '../layout/Navbar';
import Phaser from 'phaser';
import BalloonScene from '../../scenes/BalloonScene';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const GameContainer = styled('div')(() => ({
  width: '100vw',
  height: 'calc(100svh - 64px)',
  overflow: 'hidden',
  background: 'white',
}));

const StartGameContainer = styled('div')(() => ({
  width: '100vw',
  height: 'calc(100svh - 64px)',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Main: React.FC = () => {
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (!startGame) {
      return;
    }
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-container',
      width: 800,
      height: 600,
      scene: BalloonScene,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      backgroundColor: '#76d6ff',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
    };

    new Phaser.Game(config);
  }, [startGame]);

  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <>
      <Navbar />
      {!startGame && (
        <StartGameContainer>
          <Button
            size='large'
            onClick={handleClick}
            variant='contained'
            color='primary'
          >
            Start Game
          </Button>
        </StartGameContainer>
      )}
      {startGame && <GameContainer id='phaser-container' />}
    </>
  );
};
