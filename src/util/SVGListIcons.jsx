import React from 'react';
import svg_commons from "../svg/commons.svg";
import svg_docs from "../svg/docs.svg";
import svg_msgs from "../svg/msgs.svg";
import svg_extra from "../svg/extra.svg";
import svg_prod from "../svg/prod.svg";
import svg_mech from "../svg/mech.svg";
import svg_warehouse from "../svg/warehouse.svg";

const img = (type) => {
    return (
        <img src={type} alt="" />
    );
};

const SVGListIcons = {
    commons: () => { return img(svg_commons); },
    docs: () => { return img(svg_docs); },
    msgs: () => { return img(svg_msgs); },
    extra: () => { return img(svg_extra); },
    prod: () => { return img(svg_prod); },
    mech: () => { return img(svg_mech); },
    warehouse: () => { return img(svg_warehouse); },
};

export default SVGListIcons;