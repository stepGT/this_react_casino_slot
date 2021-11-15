const WinningSound = () => {
    return (
        <audio autoplay="autoplay" className="player" preload="false">
            <source src="sound/winning_slot.wav" />
        </audio>
    );
}

export default WinningSound;