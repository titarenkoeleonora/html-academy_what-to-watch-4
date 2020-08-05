import React from "react";
import PropTypes from "prop-types";
import {getTimeElapsed} from "../../utils";
import ErrorScreen from "../error-screen/error-screen";

const MovieVideoplayer = (props) => {
  const {
    isPlaying,
    duration,
    progress,
    onPlayButtonClick,
    onFullScreenButtonClick,
    onExitButtonClick,
    activeMovie,
    children
  } = props;

  const timeElapsed = getTimeElapsed(duration - progress);

  if (!activeMovie) {
    return <ErrorScreen/>;
  }

  return (
    <div className="player">
      {children}
      <button onClick={onExitButtonClick} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: ((progress * 100) / duration) + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayButtonClick} type="button" className="player__play">
            {isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"/>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{activeMovie.title}</div>

          <button onClick={onFullScreenButtonClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

MovieVideoplayer.propTypes = {
  activeMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MovieVideoplayer;
