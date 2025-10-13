import {Metadata} from "next";
import FondyNIABApp from "@/components/featured/niab/FondyNIABApp";
import ReactQueryTanstack from "@/components/featured/niab/ReactQueryTanstack";
import './NIAB.css';
import * as React from "react";
import AlertInfo from "@/components/featured/niab/AlertInfo";

export const metadata: Metadata = {
    title: "Фонды и описи НИАБ",
    description: "Удобный поиск описей по фондам НИАБ (Национальный исторический архив Беларуси).",
    icons: [
        {
            url: '/niab/favicon.ico',
            type: 'image/x-icon',
            sizes: 'any',
            rel: 'icon'
        }
    ],
    keywords: ['НИАБ', 'Фонды', 'Описи', 'генеалогия', 'Беларусь'],
    referrer: 'origin',
    robots: {index: true, follow: true}

};

export default async function NIAB() {
    return <>
        <AlertInfo severity="info" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>Количество записей в базе: Минск 816389 Гродно 201590</AlertInfo>
        <ReactQueryTanstack>
            <FondyNIABApp/>
        </ReactQueryTanstack>
    </>;
}
