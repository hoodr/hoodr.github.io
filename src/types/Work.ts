export type Work = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Project[];
  includes: {
    asset: Asset[];
  };
};

export type Project = {
  metadata: {
    tags: string[];
  };
  sys: ProjectSys;
  fields: {
    name: string;
    images: ImageSys[];
    shortDescription: string;
    fullDescription: string;
    links: string[];
    slug: string;
    releaseDate: Date;
    medium: string;
  };
};

export type Asset = {
  metadata: {
    tags: string[];
  };
  sys: ProjectSys;
  fields: AssetField[];
};

export type AssetField = {
  title: string;
  file: File;
};

export type File = {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string; // MIME type
};

export type ProjectSys = {
  space: Sys;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: {
    sys: Sys;
  };
  revision: number;
  contentType: Sys;
  locale: string;
};

export type ImageSys = {
  sys: Sys;
};

export type Sys = {
  type: string;
  linkType: string;
  id: string;
};
