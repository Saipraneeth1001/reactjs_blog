const initState = {
    projects:[
        {id:'1',title:'name is praneeth',content:'it has name'},
        {id:'2',title:'name is praneeth2',content:'it has name'},
        {id:'3',title:'name is praneeth3',content:'it has name'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){

        case 'CREATE_PROJECT':
            console.log("created this project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error occured', action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer;
