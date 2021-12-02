import React from 'react'
import {Box, Grid} from "@material-ui/core"

import TrackItem from "./TrackItem"

import {ITrack} from "../types/track"

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks}) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList