const WinningSound = () => {
    return (
        <audio autoPlay="autoplay" className="player" preload="false">
            <source src="sound/winning_slot.wav" />
        </audio>
    );
}

export default WinningSound;