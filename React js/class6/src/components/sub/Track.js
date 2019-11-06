import React, { Component } from 'react'

class Track extends Component {

    state = {
        playing: false,
        audio: null,
        playingPrevious: null
    };
    //play pause controls
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if (!this.state.playing) {
            //playing control of audio
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            //audio player pause logic
            this.state.audio.pause();
            //play pause control logic
            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false });
            } else {
                //from pause to play
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl });
            }
        }
    }//audio play pause logic ends

    //player icon controls
    trackIcon = track => {
        if (!track.preview_url) {
            return <span className="text-danger">N/A</span>
        }

        if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
            return <span className="glyphicon glyphicon-pause"></span>;
        }
        return <span className="glyphicon glyphicon-play"></span>;
    }

    render() {
        const { tracks } = this.props;
        return (
            <div className="row">
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return (
                            <div key={id} onClick={this.playAudio(preview_url)} className="col-md-3">
                                <div className="panel panel-info">
                                    <div className="panel heading">
                                        <h1 className="panel-title">{name}</h1>
                                    </div>
                                    <div className="panel body">
                                        <img src={album.images[0].url} className="img-responsive img-thumbnail" />
                                    </div>
                                    <div className="panel footer">
                                        <h3 style={{ 'cursor': 'pointer' }}>{this.trackIcon(track)}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default Track;