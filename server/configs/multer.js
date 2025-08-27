// * creating as a Middleware to upload files to removeiBackgroundImage

import multer from "multer";

const storage = multer.diskStorage({});

export const upload = multer({storage});