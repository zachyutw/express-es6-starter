export default (router,controller)=>{
    router.get('/list', (req, res) => {
        controller.getList(req, res);
    });
    
    router.post('/add', (req, res) => {
        controller.add(req, res);
    });
    router.delete('/remove', (req, res) => {
        controller.delete(req, res);
    });
    router.post('/addlist', (req, res) => {
        controller.addlist(req, res);
    });
    router.get('/list/:name',(req, res) => {
        controller.getOne(req,res);
    })
    return router;
}