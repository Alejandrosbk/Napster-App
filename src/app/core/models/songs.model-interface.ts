import { ArtistModel } from "@core/models/artist.model-interface";

export interface SongsModel {
  _id?: number | string;
  name?: string;
  album?: string;
  cover?: string;
  artist?: ArtistModel;
  duration?: number;
  url?: any;
}