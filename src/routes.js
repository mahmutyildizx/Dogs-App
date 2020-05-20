import React from "react";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/hakkinda",
        exact: false,
        component: () => {return <div>Hakkinda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet expedita fugiat harum iure laudantium libero maxime nesciunt non, nulla odio pariatur porro, quibusdam quis sed suscipit temporibus veritatis voluptate?</div>},
        title: "Hakkinda"
    },
];

export default routes;