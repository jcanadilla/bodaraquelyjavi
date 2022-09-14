import Bluebird from "bluebird";
import glob from "glob";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminOptipng from "imagemin-optipng";
import path from "node:path";

const rootPath = "../assets/fotos";

(async () => {
  const photos = glob.sync(`${rootPath}/!(opt)/*.{jpg,jpeg,png}`);

  await Bluebird.each(photos, async (photo) => {
    let destination = photo.replace("fotos/", "fotos/opt/");
    destination = path.dirname(destination);

    await imagemin([photo], {
      destination,
      plugins: [
        imageminJpegtran({
          progressive: true,
        }),
        imageminOptipng(),
      ],
    });

    console.log("Image optimized", photo);
  });
})();
