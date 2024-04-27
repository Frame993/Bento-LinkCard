export interface DataJson {
    description?:  string;
    emphasis?:     string;
    img_url?:      string;
    description2?: string;
    email?:        string;
    tags?:         Tag[];
    description3?: string;
    emphasis3?:    string;
    description4?: string;
    tag4?:         string[];
}

export interface Tag {
    LikedIn?: Elements;
    Behance?: Elements;
    Githubb?: Elements;
    Web?: Elements;
}

export interface Elements {
    title: string;
    url:   string;
}
