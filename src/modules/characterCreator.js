import React from 'react';
import './styles/characterCreator.scss';

const player = {
    name: '',
    hair: '#fff000',
    height: 0,
    weight: 0,
    other: {
        one: 0,
        two: 1,
    }
}

const CharacterCreator = () => {
    return (
        <div className="ui container creator">
            <h1>this is the characterCreator</h1>
            <form>
                <label>
                    Name: 
                    <input type="text" name="props.player.name" />
                </label>
                <label>
                    Hair color:
                    <input type="text" name="props.player.hair" />
                </label>
                <label>
                    Height:
                    <input type="text" name="props.player.height" />
                </label>
                <label>
                    Weight:
                    <input type="text" name="props.player.weight" />
                </label>
            </form>
        </div>

    );
};

export default CharacterCreator;