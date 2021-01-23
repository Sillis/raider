import React from 'react';
import './modules/styles/gameView.scss';
import ImageView from './modules/imageView';
import TextView from './modules/textView';
import ActionBubble from './modules/actionBubble';

const GameView = () => {
    return (
        <div>
            <div className="ui container contents">
                <ImageView />
                <TextView />
            </div>
            <div className="ui container right-sidebar">
                <ActionBubble />
            </div>
        </div>
    );
};

export default GameView;