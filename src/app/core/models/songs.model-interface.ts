import { ArtistModel } from "@core/models/artist.model-interface";

export interface SongsModel {
  _id?: number | string;
  name?: string;
  album?: string;
  cover?: string;
  artist?: ArtistModel;
  duration?: number;
  type?: string;
  links?: artistsImages;
  url?: any;
}

interface artistsImages {
  images?: hrefImages;
}
interface hrefImages {
  href?: string;
}