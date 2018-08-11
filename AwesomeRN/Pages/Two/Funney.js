import NiceScreen from "../../page/Nice";

export default class funneyScreen extends NiceScreen{
    constructor(props){
        super.props
        this.state = {
            tech:[],
            sports:[],
            ent:[],
            money:[],
            toutiao:[],
            war:[],
            auto:[],
            news:[],
            loaded:false,
        }
    }
    
}