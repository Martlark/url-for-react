import React, {ReactElement} from "react";
import { Link, Route } from "react-router-dom";

/***
 * class to provide routing information and support
 * for routable components
 * @param route - the route "/name/:id"
 * @param component - React component to route to
 * @param text - Text for routing links
 * @param title - Title of any link
 */
export default class UrlFor {
  route:string;
  text:string;
  title:string;
  component: React.FC;
  reg: RegExp;
  link_group:string;


  constructor(route:string, component:React.FC, text?:string, title?:string) {
    this.route = route;
    this.text = text ?? '';
    this.title = title ?? '';
    this.component = component;
    this.reg = RegExp(/(:\w*)/);
    this.link_group = "";
    const link_groups = this.reg.exec(route);
    if (link_groups && link_groups.length > 0) {
      this.link_group = link_groups[0];
    }
  }

  linkId():string {
    /**
     * return the identifier used in the route link
     * ie: for /name/:id returns 'id'
     */
    return this.link_group.substring(1);
  }

  url_for(request_id:any):string {
    /**
     * return an url using the request id to replace the linkId
     * ie: /name/:id -> url_for(45) == /name/45
     */
    return this.route.replace(this.reg, request_id || "");
  }

  Route():ReactElement|null {
    /**
     * return a React component to specify an exact route using react-router-dom
     */
    if (this.component) {
      return <Route exact path={this.route} component={this.component} />;
    }
    return null;
  }

  LinkTo(request_id:any = null, text?:string, title?:string):ReactElement {
    /**
     * return a React Link component using the request_id and title to build
     * a link
     *
     * @param request_id - the id of the request, null if none
     * @param text - the text of the link, "" for empty
     * @param title - the assistance title of the link, "" for none
     *
     */
    const textLink = text ?? this.text;
    const titleLink = title ?? this.title;
    return (
      <Link to={this.url_for(request_id)} title={titleLink}>
        {textLink}
      </Link>
    );
  }

  matchId(params:any):string {
    /**
     * return the matching id from a location props after the component has been routed to.
     * Example: useState(routeObject.matchId(props));
     */
    if (params?.params) {
      params = params?.params;
    } else if (params?.match?.params) {
      params = params?.match?.params;
    }
    return params[this.linkId()];
  }
}
