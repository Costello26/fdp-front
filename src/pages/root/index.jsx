import { React } from "react";
import { PageWrap } from "../../components/wrap/wrap";
import { Dashboard } from "../../components/dashboard/dashboard";

export const RootPage = () => {
    return (
        <PageWrap>
            <Dashboard/>
        </PageWrap>
    );
};