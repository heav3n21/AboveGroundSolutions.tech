const { Schema } = require('mongoose')


const JsaPages = new Schema({
    jobName: {
        type: String,

    },
    jobNumber: {
        type: String,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
    physicalAddress: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    supervisor: {
        type: String,
        required: true,

    },
    crew: [
        {
            type: String,
        },
    ],
    listTelephone: {
        type: String,

    },
    trFireDepartment: {
        type: Boolean,
        required: true,
    },
    trInHouseCrew: {
        type: Boolean,
        required: true,
    },
    trOther: {
        type: String,
    },
    ambulance: {
        type: Number,
        required: true,
    },
    fire: {
        type: Number,
        required: true,

    },
    police: {
        type: Number,
        required: true,
    },
    localHospital: {
        type: Number,
        required: true,
    },
    telephoneCo: {
        type: Number,
    },
    utilityCo: {
        type: Number,
    },
    evacuationPoint: {
        type: String,
        required: true,

    },
    checkFirstAidOnSite: {
        type: Boolean,
        required: true,
    },
    checkRescueBagBaseTower: {
        type: Boolean,
        required: true,
    },
    checkTowerErection: {
        type: Boolean,
        required: true,
    },
    checkElectrical: {
        type: Boolean,
        required: true,
    },
    checkLineAndAntennas: {
        type: Boolean,
        required: true,
    },
    checkCivilConcrete: {
        type: Boolean,
        required: true,
    },
    checkOther: {
        type: String,
    },
    blueNoticeSign: {
        type: Boolean,
        required: true,
    },
    yellowCautionSign: {
        type: Boolean,
        required: true,
    },
    redWarningSign: {
        type: Boolean,
        required: true,
    },
    JobTasks: {
        type: String,
        required: true,
    },
    potentialHazards: {
        type: String,
        required: true,
    },
    preventiveMeasures: {
        type: String,
        required: true,
    },
    fallsFromElevations: {
        type: Boolean,
        required: true
    },
    slipsTripsOrFalls: {
        type: Boolean,
        required: true,
    },
    vehicleTraffic: {
        type: Boolean,
        required: true,
    },
    physicalHazardsElectrical: {
        type: Boolean,
        required: true,
    },
    undergroundUtilities: {
        type: Boolean,
        required: true,
    },
    elevationSiteTerrain: {
        type: Boolean,
        required: true,
    },
    physicalHazardsOther:{
        type:'',
        required:true,
    },
    heatStress:{
        type:Boolean,
        required:true,

    },
    coldStress:{
        type:Boolean,
        required:true,
    },
    highNoise85dBA:{
        type:Boolean,
        required:true,
    },
    chemicalExposure:{
        type:Boolean,
        required:true,
        
    },
    liftingHazards:{
        type:Boolean,
        required:true,
    },
    emeAndRf:{
        type:Boolean,
        required:true,
    },
    silicaExposure:{
        type:Boolean,
        required:true,
    },
    healthHazardsOther:{
        type:''

    },
    safetyGlasses:{
        type:Boolean,
        required:true,
    },
    hardHat:{
        type:Boolean,
        required:true,
    },
    hearing:{
        type:Boolean,
        required:true,
    },
    gloves:{
        type:Boolean,
        required:true,
    },
    fallProtection:{
        type:Boolean,
        required:true,
    },
    rfSuits:{
        type:Boolean,
        required:true,
    },
    rfMonitors:{
        type:Boolean,
        required:true,
    },
    inspectionToolsEquipment:{
        type:Boolean,
        required:true,
    },
    inspectionsHouseKeeping:{
        type:Boolean,
        required:true,
    },
    inspectionsGinPoles:{
        type:Boolean,
        required:true,
    },
    inspectionsGroundFaultProtection:{
        type:Boolean,
        required:true,
    },
    inspectionsRigging:{
        type:Boolean,
        required:true,

    },
    inspectionsTagLines:{
        type:Boolean,
        required:true,
    },
    inspectionsHoists:{
        type:Boolean,
        required:true,
    },

    tailgateMeeting:{
        type:Boolean,
        required:true,
    },
    lockoutTagout:{
        type:Boolean,
        required:true,
    },
    PermitSystem:{
        type:Boolean,
        required:true,
    },
    fourInoneSign:{
        type:Boolean,
        required:true,
    },
    excavationLog:{
        type:Boolean,
        required:true,
    }

})


module.exports = JsaPages;