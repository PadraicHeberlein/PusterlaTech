import React from 'react';
import svg_commons from "../svg-files/commons.svg";
import svg_docs from "../svg-files/docs.svg";
import svg_msgs from "../svg-files/msgs.svg";
import svg_extra from "../svg-files/extra.svg";
import svg_prod from "../svg-files/prod.svg";
import svg_mech from "../svg-files/mech.svg";
import svg_warehouse from "../svg-files/warehouse.svg";

const img = (type) => {
    return (
        <img src={type} alt="" />
    );
};

const svg_list_icons = {
    commons: () => { return img(svg_commons); },
    docs: () => { return img(svg_docs); },
    msgs: () => { return img(svg_msgs); },
    extra: () => { return img(svg_extra); },
    prod: () => { return img(svg_prod); },
    mech: () => { return img(svg_mech); },
    warehouse: () => { return img(svg_warehouse); },
};

export default svg_list_icons;