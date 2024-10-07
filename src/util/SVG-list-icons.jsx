
import svg_commons from "../svg/commons.svg";
import svg_docs from "../svg/docs.svg";
import svg_msgs from "../svg/msgs.svg";
import svg_extra from "../svg/extra.svg";
import svg_prod from "../svg/prod.svg";
import svg_mech from "../svg/mech.svg";
import svg_whouse from "../svg/whouse.svg";

const img = (type) => {
    return (
        <img src={type} alt="" />
    );
};

const svg_list_icons = {
    commons: function() { return img(svg_commons); },
    docs: function () { return img(svg_docs); },
    msgs: function () { return img(svg_msgs); },
    extra: function () { return img(svg_extra); },
    prod: function () { return img(svg_prod); },
};

export default svg_list_icons;