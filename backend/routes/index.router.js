const express = require('express');
const router = express.Router();

const VerifyToken = require('../middleware/VerifyToken');

 const PickupsRoute = require('./pickups.route');
// const CityRoute = require('./City.route');
// const UserRoute = require('./User.route');
// const AuthRoute = require('./Auth.route');
// const EntityRoute = require('./Entity.route');
// const PropertyRoute = require('./Property.route');
// const DashboardRoute = require('./Dashboard.route');
// const EmailRoute = require('./Email.route');
// const StoreRoute = require('./Store.route');
// const DocTitleRoute = require('./DocTitle.route');
// const RolesRoute = require('./Roles.route');
// const FacilityRoute = require('./Facility.route');

try {

     router.use('/pickups', PickupsRoute);
    // router.use('/state',VerifyToken, StateRoute);
    // router.use('/city',VerifyToken, CityRoute);
    // router.use('/users',VerifyToken, UserRoute);
    // router.use('/entity',VerifyToken, EntityRoute);
    // router.use('/property',VerifyToken, PropertyRoute);
    // router.use('/dashboard',VerifyToken, DashboardRoute);
    // router.use('/store',VerifyToken, StoreRoute);
    // router.use('/title',VerifyToken, DocTitleRoute);
    // router.use('/email', EmailRoute);
    // router.use('/roles', RolesRoute);
    // router.use('/facility',VerifyToken, FacilityRoute);
    
} catch (e) {
    throw e;

}

module.exports = router;
