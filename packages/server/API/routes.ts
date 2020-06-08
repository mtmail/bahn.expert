/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BahnhofControllerV1 } from './controller/Bahnhof/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BussinessHubExperimentalController } from './controller/BusinessHub/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasExperimentalController } from './controller/Hafas/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasController } from './controller/Hafas/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { IrisController } from './controller/Iris/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungMonitoringController } from './controller/Reihung/monitor';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungControllerV1 } from './controller/Reihung/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SBBExperimentalController } from './controller/SBB/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StationController } from './controller/Station/v1';
import * as KoaRouter from '@koa/router';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  "LageplanResponse": {
    "dataType": "refObject",
    "properties": {
      "lageplan": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "BusinessHubCoordinates": {
    "dataType": "refObject",
    "properties": {
      "latitude": { "dataType": "double", "required": true },
      "longitude": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "BusinessHubStation": {
    "dataType": "refObject",
    "properties": {
      "title": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "ds100": { "dataType": "string" },
      "stada": { "dataType": "string" },
      "globalId": { "dataType": "string" },
      "location": { "ref": "BusinessHubCoordinates", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "OptionalData": {
    "dataType": "refObject",
    "properties": {
      "link": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Group": {
    "dataType": "refObject",
    "properties": {
      "id": { "dataType": "double", "required": true },
      "title": { "dataType": "string", "required": true },
      "optionalData": { "ref": "OptionalData" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Section": {
    "dataType": "refObject",
    "properties": {
      "id": { "dataType": "string", "required": true },
      "title": { "dataType": "string", "required": true },
      "optionalData": { "dataType": "nestedObjectLiteral", "nestedProperties": { "evaNumber": { "dataType": "string", "required": true }, "lon": { "dataType": "string", "required": true }, "lat": { "dataType": "string", "required": true }, "ds100": { "dataType": "string", "required": true } } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "News": {
    "dataType": "refObject",
    "properties": {
      "published": { "dataType": "boolean", "required": true },
      "id": { "dataType": "string", "required": true },
      "title": { "dataType": "string", "required": true },
      "subtitle": { "dataType": "string" },
      "content": { "dataType": "string", "required": true },
      "startTimestamp": { "dataType": "string", "required": true },
      "endTimestamp": { "dataType": "string", "required": true },
      "optionalData": { "ref": "OptionalData" },
      "image": { "dataType": "string", "required": true },
      "version": { "dataType": "double", "required": true },
      "updatedAt": { "dataType": "string", "required": true },
      "createdAt": { "dataType": "string", "required": true },
      "group": { "ref": "Group", "required": true },
      "sections": { "dataType": "array", "array": { "ref": "Section" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "NewsResponse": {
    "dataType": "refObject",
    "properties": {
      "count": { "dataType": "double", "required": true },
      "offset": { "dataType": "double", "required": true },
      "limit": { "dataType": "double", "required": true },
      "news": { "dataType": "array", "array": { "ref": "News" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Facilities": {
    "dataType": "refObject",
    "properties": {
      "description": { "dataType": "string", "required": true },
      "equipmentnumber": { "dataType": "double", "required": true },
      "geocoordX": { "dataType": "double", "required": true },
      "geocoordY": { "dataType": "double", "required": true },
      "state": { "dataType": "string", "required": true },
      "stateExplanation": { "dataType": "string", "required": true },
      "type": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "FastaResponse": {
    "dataType": "refObject",
    "properties": {
      "facilieites": { "dataType": "array", "array": { "ref": "Facilities" }, "required": true },
      "name": { "dataType": "string", "required": true },
      "stationnumber": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "OpL": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "icoX": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedProduct": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "line": { "dataType": "string" },
      "number": { "dataType": "string" },
      "type": { "dataType": "string" },
      "operator": { "ref": "OpL" },
      "admin": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "PubChL": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "fDate": { "dataType": "string", "required": true },
      "fTime": { "dataType": "string", "required": true },
      "tDate": { "dataType": "string", "required": true },
      "tTime": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedHimMessage": {
    "dataType": "refObject",
    "properties": {
      "hid": { "dataType": "string", "required": true },
      "act": { "dataType": "boolean", "required": true },
      "head": { "dataType": "string", "required": true },
      "lead": { "dataType": "string", "required": true },
      "text": { "dataType": "string", "required": true },
      "icoX": { "dataType": "double", "required": true },
      "prio": { "dataType": "double", "required": true },
      "fLocX": { "dataType": "double", "required": true },
      "tLocX": { "dataType": "double", "required": true },
      "prod": { "dataType": "double", "required": true },
      "affProdRefL": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
      "IModDate": { "dataType": "string", "required": true },
      "IModTime": { "dataType": "string", "required": true },
      "sDate": { "dataType": "string", "required": true },
      "sTime": { "dataType": "string", "required": true },
      "eDate": { "dataType": "string", "required": true },
      "eTime": { "dataType": "string", "required": true },
      "comp": { "dataType": "string", "required": true },
      "cat": { "dataType": "double", "required": true },
      "pubChL": { "dataType": "array", "array": { "ref": "PubChL" }, "required": true },
      "edgeRefL": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
      "affectedProducts": { "dataType": "array", "array": { "ref": "ParsedProduct" }, "required": true },
      "startTime": { "dataType": "double", "required": true },
      "endTime": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedHimSearchResponse": {
    "dataType": "refObject",
    "properties": {
      "messages": { "dataType": "array", "array": { "ref": "ParsedHimMessage" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AllowedHafasProfile": {
    "dataType": "refEnum",
    "enums": ["db", "oebb", "bvg", "hvv", "rmv", "sncb", "avv", "nahsh", "insa", "anachb", "vao", "sbb", "dbnetz", "pkp", "dbregio", "smartrbl", "vbn"],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Crd": {
    "dataType": "refObject",
    "properties": {
      "x": { "dataType": "double", "required": true },
      "y": { "dataType": "double", "required": true },
      "z": { "dataType": "double" },
      "layerX": { "dataType": "double" },
      "crdSysX": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "OptionalLocL": {
    "dataType": "refObject",
    "properties": {
      "lid": { "dataType": "string" },
      "type": { "dataType": "string" },
      "name": { "dataType": "string" },
      "icoX": { "dataType": "double" },
      "extId": { "dataType": "string" },
      "state": { "dataType": "string" },
      "crd": { "ref": "Crd" },
      "pCls": { "dataType": "double" },
      "pRefL": { "dataType": "array", "array": { "dataType": "double" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HimFilterMode": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["BIT"] }, { "dataType": "enum", "enums": ["EXC"] }, { "dataType": "enum", "enums": ["INC"] }, { "dataType": "enum", "enums": ["UNDEF"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HimFilterType": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["ADMIN"] }, { "dataType": "enum", "enums": ["CAT"] }, { "dataType": "enum", "enums": ["CH"] }, { "dataType": "enum", "enums": ["COMP"] }, { "dataType": "enum", "enums": ["DEPT"] }, { "dataType": "enum", "enums": ["EID"] }, { "dataType": "enum", "enums": ["HIMCAT"] }, { "dataType": "enum", "enums": ["HIMID"] }, { "dataType": "enum", "enums": ["LINE"] }, { "dataType": "enum", "enums": ["OPR"] }, { "dataType": "enum", "enums": ["PID"] }, { "dataType": "enum", "enums": ["PROD"] }, { "dataType": "enum", "enums": ["REG"] }, { "dataType": "enum", "enums": ["TRAIN"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HimFilter": {
    "dataType": "refObject",
    "properties": {
      "mode": { "ref": "HimFilterMode", "required": true },
      "type": { "ref": "HimFilterType", "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HimSearchRequestOptions": {
    "dataType": "refObject",
    "properties": {
      "comp": { "dataType": "string" },
      "dailyB": { "dataType": "string" },
      "dailyE": { "dataType": "string" },
      "dateB": { "dataType": "string" },
      "dateE": { "dataType": "string" },
      "dept": { "dataType": "string" },
      "dirLoc": { "ref": "OptionalLocL" },
      "himFltrL": { "dataType": "array", "array": { "ref": "HimFilter" } },
      "maxNum": { "dataType": "double" },
      "onlyHimId": { "dataType": "boolean" },
      "onlyToday": { "dataType": "boolean" },
      "stLoc": { "ref": "OptionalLocL" },
      "timeB": { "dataType": "string" },
      "timeE": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "RemL": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "string", "required": true },
      "code": { "dataType": "string", "required": true },
      "icoX": { "dataType": "double", "required": true },
      "txtN": { "dataType": "string", "required": true },
      "txtS": { "dataType": "string" },
      "prio": { "dataType": "double" },
      "sIdx": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "StopInfo": {
    "dataType": "refObject",
    "properties": {
      "scheduledPlatform": { "dataType": "string" },
      "platform": { "dataType": "string" },
      "scheduledTime": { "dataType": "double", "required": true },
      "time": { "dataType": "double", "required": true },
      "delay": { "dataType": "double" },
      "reihung": { "dataType": "boolean" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "cancelled": { "dataType": "boolean" },
      "wingIds": { "dataType": "array", "array": { "dataType": "string" } },
      "hidden": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Station": {
    "dataType": "refObject",
    "properties": {
      "title": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "DS100": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "MessagePrio": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["1"] }, { "dataType": "enum", "enums": ["2"] }, { "dataType": "enum", "enums": ["3"] }, { "dataType": "enum", "enums": ["4"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "IrisMessage": {
    "dataType": "refObject",
    "properties": {
      "text": { "dataType": "string", "required": true },
      "timestamp": { "dataType": "double", "required": true },
      "superseded": { "dataType": "boolean" },
      "priority": { "ref": "MessagePrio" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HimIrisMessage": {
    "dataType": "refObject",
    "properties": {
      "text": { "dataType": "string", "required": true },
      "timestamp": { "dataType": "double", "required": true },
      "superseded": { "dataType": "boolean" },
      "priority": { "ref": "MessagePrio" },
      "head": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Message": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "ref": "IrisMessage" }, { "ref": "HimIrisMessage" }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Messages": {
    "dataType": "refObject",
    "properties": {
      "qos": { "dataType": "array", "array": { "ref": "IrisMessage" }, "required": true },
      "delay": { "dataType": "array", "array": { "ref": "IrisMessage" }, "required": true },
      "him": { "dataType": "array", "array": { "ref": "HimIrisMessage" }, "required": true },
    },
    "additionalProperties": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Message" } },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SubstituteRef": {
    "dataType": "refObject",
    "properties": {
      "trainNumber": { "dataType": "string", "required": true },
      "trainType": { "dataType": "string", "required": true },
      "train": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Train": {
    "dataType": "refObject",
    "properties": {
      "additional": { "dataType": "boolean" },
      "cancelled": { "dataType": "boolean" },
      "showVia": { "dataType": "boolean" },
      "name": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TrainInfo": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "line": { "dataType": "string" },
      "number": { "dataType": "string", "required": true },
      "type": { "dataType": "string", "required": true },
      "operator": { "ref": "OpL" },
      "admin": { "dataType": "string" },
      "longDistance": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Abfahrt": {
    "dataType": "refObject",
    "properties": {
      "initialDeparture": { "dataType": "double", "required": true },
      "arrival": { "ref": "StopInfo" },
      "auslastung": { "dataType": "boolean", "required": true },
      "currentStation": { "ref": "Station", "required": true },
      "departure": { "ref": "StopInfo" },
      "destination": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "additional": { "dataType": "boolean" },
      "cancelled": { "dataType": "boolean" },
      "mediumId": { "dataType": "string", "required": true },
      "messages": { "ref": "Messages", "required": true },
      "platform": { "dataType": "string", "required": true },
      "productClass": { "dataType": "string", "required": true },
      "rawId": { "dataType": "string", "required": true },
      "ref": { "ref": "SubstituteRef" },
      "reihung": { "dataType": "boolean", "required": true },
      "route": { "dataType": "array", "array": { "ref": "Train" }, "required": true },
      "scheduledDestination": { "dataType": "string", "required": true },
      "scheduledPlatform": { "dataType": "string", "required": true },
      "substitute": { "dataType": "boolean" },
      "train": { "ref": "TrainInfo", "required": true },
      "hiddenReihung": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Wings": {
    "dataType": "refObject",
    "properties": {
    },
    "additionalProperties": { "ref": "Abfahrt" },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AbfahrtenResult": {
    "dataType": "refObject",
    "properties": {
      "departures": { "dataType": "array", "array": { "ref": "Abfahrt" }, "required": true },
      "lookbehind": { "dataType": "array", "array": { "ref": "Abfahrt" }, "required": true },
      "wings": { "ref": "Wings", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyFilterMode": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["BIT"] }, { "dataType": "enum", "enums": ["EXC"] }, { "dataType": "enum", "enums": ["INC"] }, { "dataType": "enum", "enums": ["UNDEF"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyFilterType": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["ADM"] }, { "dataType": "enum", "enums": ["ATTRF"] }, { "dataType": "enum", "enums": ["ATTRJ"] }, { "dataType": "enum", "enums": ["ATTRL"] }, { "dataType": "enum", "enums": ["BC"] }, { "dataType": "enum", "enums": ["CAT"] }, { "dataType": "enum", "enums": ["COUCH"] }, { "dataType": "enum", "enums": ["CTX_RECON"] }, { "dataType": "enum", "enums": ["GROUP"] }, { "dataType": "enum", "enums": ["INFOTEXTS"] }, { "dataType": "enum", "enums": ["JID"] }, { "dataType": "enum", "enums": ["LID"] }, { "dataType": "enum", "enums": ["LINE"] }, { "dataType": "enum", "enums": ["LINEID"] }, { "dataType": "enum", "enums": ["META"] }, { "dataType": "enum", "enums": ["NAME"] }, { "dataType": "enum", "enums": ["NUM"] }, { "dataType": "enum", "enums": ["OP"] }, { "dataType": "enum", "enums": ["PID"] }, { "dataType": "enum", "enums": ["PROD"] }, { "dataType": "enum", "enums": ["ROUTE"] }, { "dataType": "enum", "enums": ["SLEEP"] }, { "dataType": "enum", "enums": ["STATIONS"] }, { "dataType": "enum", "enums": ["UIC"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyFilter": {
    "dataType": "refObject",
    "properties": {
      "mode": { "ref": "JourneyFilterMode", "required": true },
      "type": { "ref": "JourneyFilterType", "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "GeoRect": {
    "dataType": "refObject",
    "properties": {
      "llCrd": { "ref": "Crd", "required": true },
      "urCrd": { "ref": "Crd", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "GeoRing": {
    "dataType": "refObject",
    "properties": {
      "cCrd": { "ref": "Crd", "required": true },
      "maxDist": { "dataType": "double", "required": true },
      "minDist": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyTreeRequestOptions": {
    "dataType": "refObject",
    "properties": {
      "getChilds": { "dataType": "double" },
      "getHIM": { "dataType": "boolean" },
      "getParent": { "dataType": "boolean" },
      "getStatus": { "dataType": "boolean" },
      "himFltrL": { "dataType": "array", "array": { "ref": "HimFilter" } },
      "jnyFltrL": { "dataType": "array", "array": { "ref": "JourneyFilter" } },
      "pid": { "dataType": "string" },
      "rect": { "ref": "GeoRect" },
      "ring": { "ref": "GeoRing" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyGraphRequestOptions": {
    "dataType": "refObject",
    "properties": {
      "date": { "dataType": "string" },
      "getPasslist": { "dataType": "boolean" },
      "getProductStartEndInfo": { "dataType": "boolean" },
      "jnyFltrL": { "dataType": "array", "array": { "ref": "JourneyFilter" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HafasDirection": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["B"] }, { "dataType": "enum", "enums": ["F"] }, { "dataType": "enum", "enums": ["FB"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyCourseRequestOptions": {
    "dataType": "refObject",
    "properties": {
      "arrLoc": { "ref": "OptionalLocL" },
      "date": { "dataType": "string", "required": true },
      "depLoc": { "ref": "OptionalLocL" },
      "dir": { "ref": "HafasDirection" },
      "getEdgeAni": { "dataType": "boolean" },
      "getEdgeCourse": { "dataType": "boolean" },
      "getIST": { "dataType": "boolean" },
      "getMainAni": { "dataType": "boolean" },
      "getMainCourse": { "dataType": "boolean" },
      "getPassLoc": { "dataType": "boolean" },
      "getPolyline": { "dataType": "boolean" },
      "jid": { "dataType": "string", "required": true },
      "jnyFltrL": { "dataType": "array", "array": { "ref": "JourneyFilter" } },
      "perSize": { "dataType": "double" },
      "perStep": { "dataType": "double" },
      "time": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AuslastungsValue": {
    "dataType": "refEnum",
    "enums": [1, 2, 3, 4],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24Auslastung": {
    "dataType": "refObject",
    "properties": {
      "first": { "ref": "AuslastungsValue" },
      "second": { "ref": "AuslastungsValue" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "CommonStopInfo": {
    "dataType": "refObject",
    "properties": {
      "scheduledPlatform": { "dataType": "string" },
      "platform": { "dataType": "string" },
      "scheduledTime": { "dataType": "double", "required": true },
      "time": { "dataType": "double", "required": true },
      "delay": { "dataType": "double" },
      "reihung": { "dataType": "boolean" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "cancelled": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24ValidDepartureStop": {
    "dataType": "refObject",
    "properties": {
      "arrival": { "ref": "CommonStopInfo" },
      "departure": { "ref": "CommonStopInfo", "required": true },
      "station": { "ref": "Station", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "additional": { "dataType": "boolean" },
      "cancelled": { "dataType": "boolean" },
      "irisMessages": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Message" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24ValidArrivalStop": {
    "dataType": "refObject",
    "properties": {
      "arrival": { "ref": "CommonStopInfo", "required": true },
      "departure": { "ref": "CommonStopInfo" },
      "station": { "ref": "Station", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "additional": { "dataType": "boolean" },
      "cancelled": { "dataType": "boolean" },
      "irisMessages": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Message" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24Stop": {
    "dataType": "refObject",
    "properties": {
      "arrival": { "ref": "CommonStopInfo" },
      "departure": { "ref": "CommonStopInfo" },
      "station": { "ref": "Station", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "additional": { "dataType": "boolean" },
      "cancelled": { "dataType": "boolean" },
      "irisMessages": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Message" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedJourneyDetails": {
    "dataType": "refObject",
    "properties": {
      "train": { "ref": "ParsedProduct", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "jid": { "dataType": "string", "required": true },
      "firstStop": { "ref": "Route%24ValidDepartureStop", "required": true },
      "lastStop": { "ref": "Route%24ValidArrivalStop", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ProdCtx": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "num": { "dataType": "string" },
      "matchId": { "dataType": "string" },
      "catOut": { "dataType": "string" },
      "catOutS": { "dataType": "string" },
      "catOutL": { "dataType": "string" },
      "catIn": { "dataType": "string" },
      "catCode": { "dataType": "string" },
      "admin": { "dataType": "string" },
      "lineId": { "dataType": "string" },
      "line": { "dataType": "string" },
      "cls": { "dataType": "double", "required": true },
      "icoX": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ProdL": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "number": { "dataType": "string" },
      "icoX": { "dataType": "double", "required": true },
      "cls": { "dataType": "double", "required": true },
      "oprX": { "dataType": "double" },
      "prodCtx": { "ref": "ProdCtx" },
      "addName": { "dataType": "string" },
      "nameS": { "dataType": "string" },
      "matchId": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TrnCmpSX": {
    "dataType": "refObject",
    "properties": {
      "tcocX": { "dataType": "array", "array": { "dataType": "double" } },
      "tcM": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TxtC": {
    "dataType": "refObject",
    "properties": {
      "r": { "dataType": "double", "required": true },
      "g": { "dataType": "double", "required": true },
      "b": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "MsgL": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "string", "required": true },
      "remX": { "dataType": "double", "required": true },
      "txtC": { "ref": "TxtC", "required": true },
      "prio": { "dataType": "double", "required": true },
      "fIdx": { "dataType": "double", "required": true },
      "tIdx": { "dataType": "double", "required": true },
      "tagL": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "CommonDeparture": {
    "dataType": "refObject",
    "properties": {
      "locX": { "dataType": "double", "required": true },
      "idx": { "dataType": "double" },
      "dCncl": { "dataType": "boolean" },
      "dProdX": { "dataType": "double" },
      "dInS": { "dataType": "boolean", "required": true },
      "dInR": { "dataType": "boolean", "required": true },
      "dTimeS": { "dataType": "string", "required": true },
      "dTimeR": { "dataType": "string" },
      "dPlatfS": { "dataType": "string" },
      "dPlatfR": { "dataType": "string" },
      "dProgType": { "dataType": "string" },
      "type": { "dataType": "string" },
      "dTZOffset": { "dataType": "double" },
      "dTrnCmpSX": { "ref": "TrnCmpSX" },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "CommonArrival": {
    "dataType": "refObject",
    "properties": {
      "locX": { "dataType": "double", "required": true },
      "idx": { "dataType": "double" },
      "aCncl": { "dataType": "boolean" },
      "aProdX": { "dataType": "double" },
      "aOutR": { "dataType": "boolean", "required": true },
      "aTimeS": { "dataType": "string", "required": true },
      "aTimeR": { "dataType": "string" },
      "aPlatfS": { "dataType": "string" },
      "aPlatfR": { "dataType": "string" },
      "aProgType": { "dataType": "string" },
      "type": { "dataType": "string" },
      "aTZOffset": { "dataType": "double" },
      "aTrnCmpSX": { "ref": "TrnCmpSX" },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "CommonStop": {
    "dataType": "refObject",
    "properties": {
      "locX": { "dataType": "double", "required": true },
      "idx": { "dataType": "double" },
      "aCncl": { "dataType": "boolean" },
      "aProdX": { "dataType": "double" },
      "aOutR": { "dataType": "boolean", "required": true },
      "aTimeS": { "dataType": "string", "required": true },
      "aTimeR": { "dataType": "string" },
      "aPlatfS": { "dataType": "string" },
      "aPlatfR": { "dataType": "string" },
      "aProgType": { "dataType": "string" },
      "type": { "dataType": "string" },
      "aTZOffset": { "dataType": "double" },
      "aTrnCmpSX": { "ref": "TrnCmpSX" },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" } },
      "dCncl": { "dataType": "boolean" },
      "dProdX": { "dataType": "double" },
      "dInS": { "dataType": "boolean", "required": true },
      "dInR": { "dataType": "boolean", "required": true },
      "dTimeS": { "dataType": "string", "required": true },
      "dTimeR": { "dataType": "string" },
      "dPlatfS": { "dataType": "string" },
      "dPlatfR": { "dataType": "string" },
      "dProgType": { "dataType": "string" },
      "dTZOffset": { "dataType": "double" },
      "dTrnCmpSX": { "ref": "TrnCmpSX" },
      "isAdd": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JnyL": {
    "dataType": "refObject",
    "properties": {
      "jid": { "dataType": "string", "required": true },
      "prodX": { "dataType": "double", "required": true },
      "dirTxt": { "dataType": "string", "required": true },
      "status": { "dataType": "string", "required": true },
      "isRchbl": { "dataType": "boolean", "required": true },
      "isCncl": { "dataType": "boolean" },
      "isPartCncl": { "dataType": "boolean" },
      "subscr": { "dataType": "string", "required": true },
      "stopL": { "dataType": "array", "array": { "ref": "CommonStop" }, "required": true },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Freq": {
    "dataType": "refObject",
    "properties": {
      "minC": { "dataType": "double", "required": true },
      "maxC": { "dataType": "double", "required": true },
      "numC": { "dataType": "double", "required": true },
      "jnyL": { "dataType": "array", "array": { "ref": "JnyL" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Jny": {
    "dataType": "refObject",
    "properties": {
      "jid": { "dataType": "string", "required": true },
      "prodX": { "dataType": "double", "required": true },
      "dirTxt": { "dataType": "string", "required": true },
      "status": { "dataType": "string", "required": true },
      "isRchbl": { "dataType": "boolean", "required": true },
      "isCncl": { "dataType": "boolean" },
      "isPartCncl": { "dataType": "boolean" },
      "subscr": { "dataType": "string", "required": true },
      "stopL": { "dataType": "array", "array": { "ref": "CommonStop" } },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" } },
      "chgDurR": { "dataType": "double" },
      "ctxRecon": { "dataType": "string", "required": true },
      "dTrnCmpSXmsgL": { "dataType": "array", "array": { "ref": "MsgL" }, "required": true },
      "dTrnCmpSX": { "ref": "TrnCmpSX" },
      "freq": { "ref": "Freq", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SecLJNY": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["JNY"], "required": true },
      "icoX": { "dataType": "double", "required": true },
      "dep": { "ref": "CommonDeparture", "required": true },
      "arr": { "ref": "CommonArrival", "required": true },
      "jny": { "ref": "Jny", "required": true },
      "parJnyL": { "dataType": "array", "array": { "ref": "Jny" } },
      "resState": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["N"] }, { "dataType": "enum", "enums": ["B"] }, { "dataType": "enum", "enums": ["S"] }], "required": true },
      "resRecommendation": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Gis": {
    "dataType": "refObject",
    "properties": {
      "dist": { "dataType": "double", "required": true },
      "durS": { "dataType": "string", "required": true },
      "dirGeo": { "dataType": "double", "required": true },
      "ctx": { "dataType": "string", "required": true },
      "gisPrvr": { "dataType": "string", "required": true },
      "getDescr": { "dataType": "boolean", "required": true },
      "getPoly": { "dataType": "boolean", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SecLWALK": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["WALK"] }, { "dataType": "enum", "enums": ["TRSF"] }], "required": true },
      "icoX": { "dataType": "double", "required": true },
      "dep": { "ref": "CommonDeparture", "required": true },
      "arr": { "ref": "CommonArrival", "required": true },
      "gis": { "ref": "Gis", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SecLKISS": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["KISS"], "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SecL": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "ref": "SecLJNY" }, { "ref": "SecLWALK" }, { "ref": "SecLKISS" }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24TarifFare": {
    "dataType": "refObject",
    "properties": {
      "price": { "dataType": "double", "required": true },
      "moreExpensiveAvailable": { "dataType": "boolean", "required": true },
      "bookable": { "dataType": "boolean", "required": true },
      "upsell": { "dataType": "boolean", "required": true },
      "targetContext": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24TarifFareSet": {
    "dataType": "refObject",
    "properties": {
      "fares": { "dataType": "array", "array": { "ref": "Route%24TarifFare" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "PossibleShort": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["3R"] }, { "dataType": "enum", "enums": ["3"] }, { "dataType": "enum", "enums": ["4"] }, { "dataType": "enum", "enums": ["2"] }, { "dataType": "enum", "enums": ["1"] }, { "dataType": "enum", "enums": ["T"] }, { "dataType": "enum", "enums": ["3V"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Wagons": {
    "dataType": "refObject",
    "properties": {
    },
    "additionalProperties": { "dataType": "boolean" },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "PlannedSequence": {
    "dataType": "refObject",
    "properties": {
      "raw": { "dataType": "string", "required": true },
      "short": { "ref": "PossibleShort" },
      "type": { "dataType": "string", "required": true },
      "wagons": { "ref": "Wagons", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24Journey": {
    "dataType": "refObject",
    "properties": {
      "cancelled": { "dataType": "boolean" },
      "changeDuration": { "dataType": "double" },
      "duration": { "dataType": "double" },
      "finalDestination": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "product": { "ref": "ProdL" },
      "raw": { "ref": "SecL" },
      "segmentDestination": { "ref": "Station", "required": true },
      "segmentStart": { "ref": "Station", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
      "train": { "ref": "ParsedProduct", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "tarifSet": { "dataType": "array", "array": { "ref": "Route%24TarifFareSet" } },
      "plannedSequence": { "ref": "PlannedSequence" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24JourneySegmentTrain": {
    "dataType": "refObject",
    "properties": {
      "cancelled": { "dataType": "boolean" },
      "changeDuration": { "dataType": "double" },
      "duration": { "dataType": "double" },
      "finalDestination": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "product": { "ref": "ProdL" },
      "raw": { "ref": "SecL" },
      "segmentDestination": { "ref": "Station", "required": true },
      "segmentStart": { "ref": "Station", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
      "train": { "ref": "ParsedProduct", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "tarifSet": { "dataType": "array", "array": { "ref": "Route%24TarifFareSet" } },
      "plannedSequence": { "ref": "PlannedSequence" },
      "type": { "dataType": "enum", "enums": ["JNY"], "required": true },
      "arrival": { "ref": "CommonStopInfo", "required": true },
      "departure": { "ref": "CommonStopInfo", "required": true },
      "wings": { "dataType": "array", "array": { "ref": "Route%24Journey" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Pick_CommonStopInfo.time-or-delay_": {
    "dataType": "refAlias",
    "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "time": { "dataType": "double", "required": true }, "delay": { "dataType": "double" } }, "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "WalkStopInfo": {
    "dataType": "refAlias",
    "type": { "ref": "Pick_CommonStopInfo.time-or-delay_", "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Coordinates": {
    "dataType": "refObject",
    "properties": {
      "lat": { "dataType": "double", "required": true },
      "lng": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HafasStation": {
    "dataType": "refObject",
    "properties": {
      "title": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "products": { "dataType": "array", "array": { "ref": "ParsedProduct" } },
      "coordinates": { "ref": "Coordinates", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24JourneySegmentWalk": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["WALK"], "required": true },
      "train": { "ref": "ParsedProduct", "required": true },
      "arrival": { "ref": "WalkStopInfo", "required": true },
      "departure": { "ref": "WalkStopInfo", "required": true },
      "duration": { "dataType": "double", "required": true },
      "segmentStart": { "ref": "HafasStation", "required": true },
      "segmentDestination": { "ref": "HafasStation", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Route%24JourneySegment": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "ref": "Route%24JourneySegmentTrain" }, { "ref": "Route%24JourneySegmentWalk" }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SDays": {
    "dataType": "refObject",
    "properties": {
      "sDaysR": { "dataType": "string", "required": true },
      "sDaysI": { "dataType": "string", "required": true },
      "sDaysB": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TarifFare": {
    "dataType": "refObject",
    "properties": {
      "prc": { "dataType": "double", "required": true },
      "isFromPrice": { "dataType": "boolean", "required": true },
      "isBookable": { "dataType": "boolean", "required": true },
      "isUpsell": { "dataType": "boolean", "required": true },
      "targetCtx": { "dataType": "string", "required": true },
      "buttonText": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TarifFareSet": {
    "dataType": "refObject",
    "properties": {
      "fareL": { "dataType": "array", "array": { "ref": "TarifFare" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "HafasTarifResponse": {
    "dataType": "refObject",
    "properties": {
      "statusCode": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["OK"] }, { "dataType": "string" }], "required": true },
      "fareSetL": { "dataType": "array", "array": { "ref": "TarifFareSet" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SotCtxt": {
    "dataType": "refObject",
    "properties": {
      "cnLocX": { "dataType": "double", "required": true },
      "calcDate": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "locMode": { "dataType": "string", "required": true },
      "pLocX": { "dataType": "double", "required": true },
      "reqMode": { "dataType": "string", "required": true },
      "sectX": { "dataType": "double", "required": true },
      "calcTime": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "OutConL": {
    "dataType": "refObject",
    "properties": {
      "isNotRdbl": { "dataType": "boolean" },
      "cid": { "dataType": "string", "required": true },
      "date": { "dataType": "string", "required": true },
      "dur": { "dataType": "string", "required": true },
      "chg": { "dataType": "double", "required": true },
      "sDays": { "ref": "SDays", "required": true },
      "dep": { "ref": "CommonDeparture", "required": true },
      "arr": { "ref": "CommonArrival", "required": true },
      "secL": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "SecL" }, "required": true },
      "ctxRecon": { "dataType": "string", "required": true },
      "trfRes": { "ref": "HafasTarifResponse" },
      "conSubscr": { "dataType": "string", "required": true },
      "resState": { "dataType": "string", "required": true },
      "resRecommendation": { "dataType": "string", "required": true },
      "recState": { "dataType": "string", "required": true },
      "sotRating": { "dataType": "double", "required": true },
      "isSotCon": { "dataType": "boolean", "required": true },
      "showARSLink": { "dataType": "boolean", "required": true },
      "sotCtxt": { "ref": "SotCtxt", "required": true },
      "cksum": { "dataType": "string", "required": true },
      "cksumDti": { "dataType": "string", "required": true },
      "msgL": { "dataType": "array", "array": { "ref": "MsgL" }, "required": true },
      "dTrnCmpSX": { "ref": "TrnCmpSX", "required": true },
      "freq": { "ref": "Freq", "required": true },
      "isAlt": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SingleRoute": {
    "dataType": "refObject",
    "properties": {
      "arrival": { "ref": "CommonStopInfo", "required": true },
      "departure": { "ref": "CommonStopInfo", "required": true },
      "isRideable": { "dataType": "boolean", "required": true },
      "checksum": { "dataType": "string", "required": true },
      "cid": { "dataType": "string", "required": true },
      "date": { "dataType": "double", "required": true },
      "duration": { "dataType": "double", "required": true },
      "changes": { "dataType": "double", "required": true },
      "segments": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Route%24JourneySegment" }, "required": true },
      "segmentTypes": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
      "tarifSet": { "dataType": "array", "array": { "ref": "Route%24TarifFareSet" } },
      "raw": { "ref": "OutConL" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AllowedSotMode": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["JI"] }, { "dataType": "enum", "enums": ["RC"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SearchOnTripBody": {
    "dataType": "refObject",
    "properties": {
      "sotMode": { "ref": "AllowedSotMode", "required": true },
      "id": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedSearchOnTripResponse": {
    "dataType": "refObject",
    "properties": {
      "cancelled": { "dataType": "boolean" },
      "changeDuration": { "dataType": "double" },
      "duration": { "dataType": "double" },
      "finalDestination": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "product": { "ref": "ProdL" },
      "raw": { "ref": "SecL" },
      "segmentDestination": { "ref": "Station", "required": true },
      "segmentStart": { "ref": "Station", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
      "train": { "ref": "ParsedProduct", "required": true },
      "auslastung": { "ref": "Route%24Auslastung" },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "tarifSet": { "dataType": "array", "array": { "ref": "Route%24TarifFareSet" } },
      "plannedSequence": { "ref": "PlannedSequence" },
      "type": { "dataType": "enum", "enums": ["JNY"], "required": true },
      "arrival": { "ref": "CommonStopInfo", "required": true },
      "departure": { "ref": "CommonStopInfo", "required": true },
      "wings": { "dataType": "array", "array": { "ref": "Route%24Journey" } },
      "currentStop": { "ref": "Route%24Stop" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ArrivalStationBoardEntry": {
    "dataType": "refObject",
    "properties": {
      "train": { "ref": "ParsedProduct", "required": true },
      "cancelled": { "dataType": "boolean" },
      "finalDestination": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" } },
      "currentStation": { "ref": "HafasStation", "required": true },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "arrival": { "ref": "CommonStopInfo", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "DepartureStationBoardEntry": {
    "dataType": "refObject",
    "properties": {
      "train": { "ref": "ParsedProduct", "required": true },
      "cancelled": { "dataType": "boolean" },
      "finalDestination": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" } },
      "currentStation": { "ref": "HafasStation", "required": true },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
      "departure": { "ref": "CommonStopInfo", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TrainSearchResult": {
    "dataType": "refObject",
    "properties": {
      "value": { "dataType": "string", "required": true },
      "cycle": { "dataType": "double", "required": true },
      "pool": { "dataType": "double", "required": true },
      "id": { "dataType": "string", "required": true },
      "dep": { "dataType": "string", "required": true },
      "trainLink": { "dataType": "string", "required": true },
      "journParam": { "dataType": "string", "required": true },
      "pubTime": { "dataType": "string", "required": true },
      "depDate": { "dataType": "string", "required": true },
      "depTime": { "dataType": "string", "required": true },
      "arr": { "dataType": "string", "required": true },
      "arrTime": { "dataType": "string", "required": true },
      "vt": { "dataType": "string", "required": true },
      "jid": { "dataType": "string", "required": true },
      "ctxRecon": { "dataType": "string", "required": true },
      "jDetails": { "ref": "ParsedJourneyDetails", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedJourneyMatchResponse": {
    "dataType": "refObject",
    "properties": {
      "train": { "ref": "ParsedProduct", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
      "jid": { "dataType": "string", "required": true },
      "firstStop": { "ref": "Route%24Stop", "required": true },
      "lastStop": { "ref": "Route%24Stop", "required": true },
      "messages": { "dataType": "array", "array": { "ref": "RemL" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyMatchOptions": {
    "dataType": "refObject",
    "properties": {
      "trainName": { "dataType": "string", "required": true },
      "initialDepartureDate": { "dataType": "double" },
      "jnyFltrL": { "dataType": "array", "array": { "ref": "JourneyFilter" } },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "RoutingResult": {
    "dataType": "refObject",
    "properties": {
      "routes": { "dataType": "array", "array": { "ref": "SingleRoute" }, "required": true },
      "context": { "dataType": "nestedObjectLiteral", "nestedProperties": { "later": { "dataType": "string", "required": true }, "earlier": { "dataType": "string", "required": true } }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JnyCl": {
    "dataType": "refEnum",
    "enums": [1, 2],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TravelerType": {
    "dataType": "refEnum",
    "enums": ["E", "K", "B"],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "LoyalityCard": {
    "dataType": "refEnum",
    "enums": ["BC25First", "BC25Second", "BC50First", "BC50Second", "SHCard", "ATVorteilscard", "CHGeneral", "CHHalfWithRailplus", "CHHalfWithoutRailplus", "NLWithRailplus", "NLWithoutRailplus", "BC100First", "BC100Second"],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TripSearchTraveler": {
    "dataType": "refObject",
    "properties": {
      "type": { "ref": "TravelerType", "required": true },
      "loyalityCard": { "ref": "LoyalityCard" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TripSearchTarifRequest": {
    "dataType": "refObject",
    "properties": {
      "class": { "ref": "JnyCl", "required": true },
      "traveler": { "dataType": "array", "array": { "ref": "TripSearchTraveler" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TripSearchOptions": {
    "dataType": "refObject",
    "properties": {
      "economic": { "dataType": "boolean" },
      "getIV": { "dataType": "boolean" },
      "getPasslist": { "dataType": "boolean" },
      "getPolyline": { "dataType": "boolean" },
      "numF": { "dataType": "double" },
      "ctxScr": { "dataType": "string" },
      "ushrp": { "dataType": "boolean" },
      "start": { "dataType": "string", "required": true },
      "destination": { "dataType": "string", "required": true },
      "time": { "dataType": "double" },
      "via": { "dataType": "array", "array": { "dataType": "string" } },
      "transferTime": { "dataType": "double" },
      "maxChanges": { "dataType": "double" },
      "searchForDeparture": { "dataType": "boolean" },
      "onlyRegional": { "dataType": "boolean" },
      "tarif": { "ref": "TripSearchTarifRequest" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SingleParsedJourneyGeoPos": {
    "dataType": "refObject",
    "properties": {
      "jid": { "dataType": "string", "required": true },
      "date": { "dataType": "double", "required": true },
      "train": { "ref": "ParsedProduct", "required": true },
      "position": { "ref": "Coordinates", "required": true },
      "stops": { "dataType": "array", "array": { "ref": "Route%24Stop" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "ParsedJourneyGeoPosResponse": {
    "dataType": "refAlias",
    "type": { "dataType": "array", "array": { "ref": "SingleParsedJourneyGeoPos" }, "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "InOutMode": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["B"] }, { "dataType": "enum", "enums": ["I"] }, { "dataType": "enum", "enums": ["N"] }, { "dataType": "enum", "enums": ["O"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyTrainPosMode": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["CALC"] }, { "dataType": "enum", "enums": ["CALC_FOR_REPORT"] }, { "dataType": "enum", "enums": ["CALC_ONLY"] }, { "dataType": "enum", "enums": ["CALC_REPORT"] }, { "dataType": "enum", "enums": ["REPORT_ONLY"] }, { "dataType": "enum", "enums": ["REPORT_ONLY_WITH_STOPS"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "JourneyGeoPosOptions": {
    "dataType": "refObject",
    "properties": {
      "ageOfReport": { "dataType": "boolean" },
      "date": { "dataType": "string" },
      "time": { "dataType": "string" },
      "getSimpleTrainComposition": { "dataType": "boolean" },
      "getUnmatched": { "dataType": "boolean" },
      "inOut": { "ref": "InOutMode" },
      "jnyFltrL": { "dataType": "array", "array": { "ref": "JourneyFilter" } },
      "locL": { "dataType": "array", "array": { "ref": "OptionalLocL" } },
      "maxJny": { "dataType": "boolean" },
      "onlyRT": { "dataType": "boolean" },
      "perSize": { "dataType": "double" },
      "perStep": { "dataType": "double" },
      "rect": { "ref": "GeoRect" },
      "ring": { "ref": "GeoRing" },
      "rtMsgStatus": { "dataType": "boolean" },
      "trainPosMode": { "ref": "JourneyTrainPosMode" },
      "zoom": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "WingInfo": {
    "dataType": "refObject",
    "properties": {
      "station": { "dataType": "nestedObjectLiteral", "nestedProperties": { "title": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } }, "required": true },
      "pt": { "dataType": "double", "required": true },
      "fl": { "dataType": "boolean", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "WingDefinition": {
    "dataType": "refObject",
    "properties": {
      "start": { "ref": "WingInfo" },
      "end": { "ref": "WingInfo" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "IrisStation": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "meta": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
      "eva": { "dataType": "string", "required": true },
      "ds100": { "dataType": "string", "required": true },
      "db": { "dataType": "string", "required": true },
      "creationts": { "dataType": "string", "required": true },
      "p": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AdditionalFahrzeugInfo": {
    "dataType": "refObject",
    "properties": {
      "klasse": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": [0] }, { "dataType": "enum", "enums": [1] }, { "dataType": "enum", "enums": [2] }, { "dataType": "enum", "enums": [3] }, { "dataType": "enum", "enums": [4] }], "required": true },
      "icons": { "dataType": "nestedObjectLiteral", "nestedProperties": { "wifiOff": { "dataType": "boolean" }, "wifi": { "dataType": "boolean" }, "toddler": { "dataType": "boolean" }, "family": { "dataType": "boolean" }, "info": { "dataType": "boolean" }, "quiet": { "dataType": "boolean" }, "disabled": { "dataType": "boolean" }, "bike": { "dataType": "boolean" }, "wheelchair": { "dataType": "boolean" }, "dining": { "dataType": "boolean" } }, "required": true },
      "comfort": { "dataType": "boolean" },
      "comfortSeats": { "dataType": "string" },
      "disabledSeats": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Fahrzeugausstattung": {
    "dataType": "refObject",
    "properties": {
      "anzahl": { "dataType": "string", "required": true },
      "ausstattungsart": { "dataType": "string", "required": true },
      "bezeichnung": { "dataType": "string", "required": true },
      "status": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "FahrzeugKategorie": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["DOPPELSTOCKSTEUERWAGENERSTEZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["DOPPELSTOCKSTEUERWAGENZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["DOPPELSTOCKWAGENERSTEKLASSE"] }, { "dataType": "enum", "enums": ["DOPPELSTOCKWAGENERSTEZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["DOPPELSTOCKWAGENZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["HALBSPEISEWAGENERSTEKLASSE"] }, { "dataType": "enum", "enums": ["HALBSPEISEWAGENZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["LOK"] }, { "dataType": "enum", "enums": ["REISEZUGWAGENERSTEKLASSE"] }, { "dataType": "enum", "enums": ["REISEZUGWAGENERSTEZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["REISEZUGWAGENZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["SPEISEWAGEN"] }, { "dataType": "enum", "enums": ["STEUERWAGENERSTEKLASSE"] }, { "dataType": "enum", "enums": ["STEUERWAGENERSTEZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["STEUERWAGENZWEITEKLASSE"] }, { "dataType": "enum", "enums": ["TRIEBKOPF"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Position": {
    "dataType": "refObject",
    "properties": {
      "endemeter": { "dataType": "string", "required": true },
      "endeprozent": { "dataType": "string", "required": true },
      "startmeter": { "dataType": "string", "required": true },
      "startprozent": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Fahrzeug": {
    "dataType": "refObject",
    "properties": {
      "allFahrzeugausstattung": { "dataType": "array", "array": { "ref": "Fahrzeugausstattung" }, "required": true },
      "kategorie": { "ref": "FahrzeugKategorie", "required": true },
      "fahrzeugnummer": { "dataType": "string", "required": true },
      "orientierung": { "dataType": "string", "required": true },
      "positioningruppe": { "dataType": "string", "required": true },
      "fahrzeugsektor": { "dataType": "string", "required": true },
      "fahrzeugtyp": { "dataType": "string", "required": true },
      "wagenordnungsnummer": { "dataType": "string", "required": true },
      "positionamhalt": { "ref": "Position", "required": true },
      "status": { "dataType": "string", "required": true },
      "additionalInfo": { "ref": "AdditionalFahrzeugInfo", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "AvailableBR": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["401"] }, { "dataType": "enum", "enums": ["402"] }, { "dataType": "enum", "enums": ["403"] }, { "dataType": "enum", "enums": ["406"] }, { "dataType": "enum", "enums": ["407"] }, { "dataType": "enum", "enums": ["410.1"] }, { "dataType": "enum", "enums": ["411"] }, { "dataType": "enum", "enums": ["412"] }, { "dataType": "enum", "enums": ["415"] }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "BRInfo": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "BR": { "ref": "AvailableBR" },
      "serie": { "dataType": "string" },
      "redesign": { "dataType": "boolean" },
      "noPdf": { "dataType": "boolean" },
      "pdf": { "dataType": "string" },
      "country": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["DE"] }, { "dataType": "enum", "enums": ["AT"] }] },
      "showBRInfo": { "dataType": "boolean" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "BaseFahrzeug": {
    "dataType": "refObject",
    "properties": {
      "allFahrzeugausstattung": { "dataType": "array", "array": { "ref": "Fahrzeugausstattung" }, "required": true },
      "kategorie": { "ref": "FahrzeugKategorie", "required": true },
      "fahrzeugnummer": { "dataType": "string", "required": true },
      "orientierung": { "dataType": "string", "required": true },
      "positioningruppe": { "dataType": "string", "required": true },
      "fahrzeugsektor": { "dataType": "string", "required": true },
      "fahrzeugtyp": { "dataType": "string", "required": true },
      "wagenordnungsnummer": { "dataType": "string", "required": true },
      "positionamhalt": { "ref": "Position", "required": true },
      "status": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Fahrzeuggruppe": {
    "dataType": "refObject",
    "properties": {
      "allFahrzeug": { "dataType": "array", "array": { "ref": "Fahrzeug" }, "required": true },
      "fahrzeuggruppebezeichnung": { "dataType": "string", "required": true },
      "zielbetriebsstellename": { "dataType": "string", "required": true },
      "startbetriebsstellename": { "dataType": "string", "required": true },
      "verkehrlichezugnummer": { "dataType": "string", "required": true },
      "goesToFrance": { "dataType": "boolean", "required": true },
      "startPercentage": { "dataType": "double", "required": true },
      "endPercentage": { "dataType": "double", "required": true },
      "tzn": { "dataType": "string" },
      "name": { "dataType": "string" },
      "br": { "ref": "BRInfo" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "BaseFahrzeuggruppe": {
    "dataType": "refObject",
    "properties": {
      "allFahrzeug": { "dataType": "array", "array": { "ref": "BaseFahrzeug" }, "required": true },
      "fahrzeuggruppebezeichnung": { "dataType": "string", "required": true },
      "zielbetriebsstellename": { "dataType": "string", "required": true },
      "startbetriebsstellename": { "dataType": "string", "required": true },
      "verkehrlichezugnummer": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Sektor": {
    "dataType": "refObject",
    "properties": {
      "positionamgleis": { "ref": "Position", "required": true },
      "sektorbezeichnung": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Halt": {
    "dataType": "refObject",
    "properties": {
      "abfahrtszeit": { "dataType": "string" },
      "ankunftszeit": { "dataType": "string" },
      "bahnhofsname": { "dataType": "string", "required": true },
      "evanummer": { "dataType": "string", "required": true },
      "gleisbezeichnung": { "dataType": "string" },
      "haltid": { "dataType": "string", "required": true },
      "rl100": { "dataType": "string", "required": true },
      "allSektor": { "dataType": "array", "array": { "ref": "Sektor" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Formation": {
    "dataType": "refObject",
    "properties": {
      "fahrtrichtung": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["VORWAERTS"] }, { "dataType": "enum", "enums": ["RUCKWAERTS"] }], "required": true },
      "allFahrzeuggruppe": { "dataType": "array", "array": { "ref": "Fahrzeuggruppe" }, "required": true },
      "halt": { "ref": "Halt", "required": true },
      "liniebezeichnung": { "dataType": "string", "required": true },
      "zuggattung": { "dataType": "string", "required": true },
      "zugnummer": { "dataType": "string", "required": true },
      "serviceid": { "dataType": "string", "required": true },
      "planstarttag": { "dataType": "string", "required": true },
      "fahrtid": { "dataType": "string", "required": true },
      "istplaninformation": { "dataType": "boolean", "required": true },
      "isActuallyIC": { "dataType": "boolean", "required": true },
      "reportedZuggattung": { "dataType": "string", "required": true },
      "differentDestination": { "dataType": "boolean" },
      "differentZugnummer": { "dataType": "boolean" },
      "scale": { "dataType": "double", "required": true },
      "startPercentage": { "dataType": "double", "required": true },
      "endPercentage": { "dataType": "double", "required": true },
      "realFahrtrichtung": { "dataType": "boolean", "required": true },
      "isRealtime": { "dataType": "boolean", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SBBCoordinates": {
    "dataType": "refObject",
    "properties": {
      "latitude": { "dataType": "double", "required": true },
      "longitude": { "dataType": "double", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "SBBStation": {
    "dataType": "refObject",
    "properties": {
      "title": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "location": { "ref": "SBBCoordinates", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "RoutingOptions": {
    "dataType": "refObject",
    "properties": {
      "start": { "dataType": "string", "required": true },
      "destination": { "dataType": "string", "required": true },
      "time": { "dataType": "double" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "StationSearchType": {
    "dataType": "refEnum",
    "enums": ["default", "hafas", "openData", "openDataOffline", "stationsData", "businessHub", "sbb"],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "IrisStationWithRelated": {
    "dataType": "refObject",
    "properties": {
      "station": { "ref": "IrisStation", "required": true },
      "relatedStations": { "dataType": "array", "array": { "ref": "IrisStation" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Address": {
    "dataType": "refObject",
    "properties": {
      "city": { "dataType": "string", "required": true },
      "postalCode": { "dataType": "string", "required": true },
      "street": { "dataType": "string", "required": true },
      "state": { "dataType": "string" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TripleSCenter": {
    "dataType": "refObject",
    "properties": {
      "identifier": { "dataType": "double", "required": true },
      "name": { "dataType": "string", "required": true },
      "publicPhoneNumber": { "dataType": "string", "required": true },
      "publicFaxNumber": { "dataType": "string", "required": true },
      "internalPhoneNumber": { "dataType": "string", "required": true },
      "internalFaxNumber": { "dataType": "string", "required": true },
      "address": { "ref": "Address", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Identifier_EVA_": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["EVA"], "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Identifier_RIL100_": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["RIL100"], "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Identifier_STADA_": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["STADA"], "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Identifier_GLOBAL_ID_": {
    "dataType": "refObject",
    "properties": {
      "type": { "dataType": "enum", "enums": ["GLOBAL_ID"], "required": true },
      "value": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "KnownIdentifier": {
    "dataType": "refAlias",
    "type": { "dataType": "union", "subSchemas": [{ "ref": "Identifier_EVA_" }, { "ref": "Identifier_RIL100_" }, { "ref": "Identifier_STADA_" }, { "ref": "Identifier_GLOBAL_ID_" }], "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "StationManagement": {
    "dataType": "refObject",
    "properties": {
      "identifier": { "dataType": "double", "required": true },
      "name": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "LocalTransportAuthority": {
    "dataType": "refObject",
    "properties": {
      "shortName": { "dataType": "string", "required": true },
      "name": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "RegionalUnit": {
    "dataType": "refObject",
    "properties": {
      "identifier": { "dataType": "string", "required": true },
      "shortName": { "dataType": "string", "required": true },
      "name": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "TimetableOffice": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "email": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Availability": {
    "dataType": "refObject",
    "properties": {
      "day": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["monday"] }, { "dataType": "enum", "enums": ["tuesday"] }, { "dataType": "enum", "enums": ["wednesday"] }, { "dataType": "enum", "enums": ["thursday"] }, { "dataType": "enum", "enums": ["friday"] }, { "dataType": "enum", "enums": ["saturday"] }, { "dataType": "enum", "enums": ["sunday"] }], "required": true },
      "openTime": { "dataType": "string", "required": true },
      "closeTime": { "dataType": "string", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "DBInformation": {
    "dataType": "refObject",
    "properties": {
      "availability": { "dataType": "array", "array": { "ref": "Availability" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "LocalServiceStaff": {
    "dataType": "refObject",
    "properties": {
      "availability": { "dataType": "array", "array": { "ref": "Availability" }, "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Details": {
    "dataType": "refObject",
    "properties": {
      "ratingCategory": { "dataType": "double", "required": true },
      "priceCategory": { "dataType": "double", "required": true },
      "hasParking": { "dataType": "boolean", "required": true },
      "hasBicycleParking": { "dataType": "boolean", "required": true },
      "hasLocalPublicTransport": { "dataType": "boolean", "required": true },
      "hasPublicFacilities": { "dataType": "boolean", "required": true },
      "hasLockerSystem": { "dataType": "boolean", "required": true },
      "hasTravelNecessities": { "dataType": "boolean", "required": true },
      "hasSteplessAccess": { "dataType": "string", "required": true },
      "mobilityService": { "dataType": "string", "required": true },
      "hasWifi": { "dataType": "boolean", "required": true },
      "hasTravelCenter": { "dataType": "boolean", "required": true },
      "hasRailwayMission": { "dataType": "boolean", "required": true },
      "hasDbLounge": { "dataType": "boolean", "required": true },
      "hasLostAndFound": { "dataType": "boolean", "required": true },
      "hasCardRental": { "dataType": "boolean", "required": true },
      "stationManagement": { "ref": "StationManagement", "required": true },
      "localTransportAuthority": { "ref": "LocalTransportAuthority", "required": true },
      "regionalUnit": { "ref": "RegionalUnit", "required": true },
      "timetableOffice": { "ref": "TimetableOffice", "required": true },
      "dbInformation": { "ref": "DBInformation", "required": true },
      "localServiceStaff": { "ref": "LocalServiceStaff", "required": true },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "DetailBusinessHubStation": {
    "dataType": "refObject",
    "properties": {
      "title": { "dataType": "string", "required": true },
      "id": { "dataType": "string", "required": true },
      "ds100": { "dataType": "string" },
      "stada": { "dataType": "string" },
      "globalId": { "dataType": "string" },
      "location": { "ref": "BusinessHubCoordinates", "required": true },
      "alternativeNames": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
      "identifiers": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "KnownIdentifier" }, "required": true },
      "address": { "ref": "Address", "required": true },
      "details": { "ref": "Details", "required": true },
      "tripleSCenter": { "ref": "TripleSCenter" },
    },
    "additionalProperties": false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(router: KoaRouter) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  router.get('/api/bahnhof/v1/lageplan/:stationName',
    async (context: any, next: any) => {
      const args = {
        stationName: { "in": "path", "name": "stationName", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new BahnhofControllerV1();

      const promise = controller.lageplan.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/bahnhof/v1/lageplan/:stationName/:evaId',
    async (context: any, next: any) => {
      const args = {
        stationName: { "in": "path", "name": "stationName", "required": true, "dataType": "string" },
        evaId: { "in": "path", "name": "evaId", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new BahnhofControllerV1();

      const promise = controller.lageplanWithBayern.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/businessHub/experimental/station/:searchTerm',
    async (context: any, next: any) => {
      const args = {
        searchTerm: { "in": "path", "name": "searchTerm", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new BussinessHubExperimentalController();

      const promise = controller.station.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/businessHub/experimental/news',
    async (context: any, next: any) => {
      const args = {
        offset: { "in": "query", "name": "offset", "dataType": "double" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
        groupIds: { "in": "query", "name": "groupIds", "dataType": "array", "array": { "dataType": "double" } },
        published: { "in": "query", "name": "published", "dataType": "boolean" },
        sectionIds: { "in": "query", "name": "sectionIds", "dataType": "array", "array": { "dataType": "string" } },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new BussinessHubExperimentalController();

      const promise = controller.news.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/businessHub/experimental/fasta/:stadaId',
    async (context: any, next: any) => {
      const args = {
        stadaId: { "in": "path", "name": "stadaId", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new BussinessHubExperimentalController();

      const promise = controller.fasta.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/experimental/himMessages',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        himIds: { "in": "query", "name": "himIds", "required": true, "dataType": "array", "array": { "dataType": "string" } },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.himMessages.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/experimental/HimSearch',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        options: { "in": "body", "name": "options", "required": true, "ref": "HimSearchRequestOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.himSearch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/experimental/irisCompatibleAbfahrten/:evaId',
    async (context: any, next: any) => {
      const args = {
        evaId: { "in": "path", "name": "evaId", "required": true, "dataType": "string" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.irisCompatibleAbfahrten.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/experimental/JourneyTree',
    async (context: any, next: any) => {
      const args = {
        options: { "in": "body", "name": "options", "required": true, "ref": "JourneyTreeRequestOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.JourneyTree.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/experimental/JourneyGraph',
    async (context: any, next: any) => {
      const args = {
        options: { "in": "body", "name": "options", "required": true, "ref": "JourneyGraphRequestOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.JourneyGraph.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/experimental/JourneyCourse',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        options: { "in": "body", "name": "options", "required": true, "ref": "JourneyCourseRequestOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasExperimentalController();

      const promise = controller.JourneyCourse.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/journeyDetails',
    async (context: any, next: any) => {
      const args = {
        jid: { "in": "query", "name": "jid", "required": true, "dataType": "string" },
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.journeyDetails.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/searchOnTrip',
    async (context: any, next: any) => {
      const args = {
        body: { "in": "body", "name": "body", "required": true, "ref": "SearchOnTripBody" },
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.searchOnTrip.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/details/:trainName',
    async (context: any, next: any) => {
      const args = {
        trainName: { "in": "path", "name": "trainName", "required": true, "dataType": "string" },
        stop: { "in": "query", "name": "stop", "dataType": "string" },
        station: { "in": "query", "name": "station", "dataType": "string" },
        date: { "in": "query", "name": "date", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.details.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/auslastung/:start/:destination/:trainNumber/:time',
    async (context: any, next: any) => {
      const args = {
        start: { "in": "path", "name": "start", "required": true, "dataType": "string" },
        destination: { "in": "path", "name": "destination", "required": true, "dataType": "string" },
        trainNumber: { "in": "path", "name": "trainNumber", "required": true, "dataType": "string" },
        time: { "in": "path", "name": "time", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.auslastung.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/arrivalStationBoard',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        station: { "in": "query", "name": "station", "required": true, "dataType": "string" },
        date: { "in": "query", "name": "date", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.arrivalStationBoard.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/departureStationBoard',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        station: { "in": "query", "name": "station", "required": true, "dataType": "string" },
        direction: { "in": "query", "name": "direction", "dataType": "string" },
        date: { "in": "query", "name": "date", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.departureStationBoard.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/trainSearch/:trainName',
    async (context: any, next: any) => {
      const args = {
        trainName: { "in": "path", "name": "trainName", "required": true, "dataType": "string" },
        date: { "in": "query", "name": "date", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.trainSearch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/journeyMatch/:trainName',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        trainName: { "in": "path", "name": "trainName", "required": true, "dataType": "string" },
        date: { "in": "query", "name": "date", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.journeyMatch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/journeyMatch',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        options: { "in": "body", "name": "options", "required": true, "ref": "JourneyMatchOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.postJourneyMatch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/enrichedJourneyMatch',
    async (context: any, next: any) => {
      const args = {
        options: { "in": "body", "name": "options", "required": true, "ref": "JourneyMatchOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.enrichedJourneyMatch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/geoStation',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        lat: { "in": "query", "name": "lat", "required": true, "dataType": "double" },
        lng: { "in": "query", "name": "lng", "required": true, "dataType": "double" },
        maxDist: { "default": 1000, "in": "query", "name": "maxDist", "dataType": "double" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.geoStation.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/station/:searchTerm',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        searchTerm: { "in": "path", "name": "searchTerm", "required": true, "dataType": "string" },
        type: { "in": "query", "name": "type", "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["S"] }, { "dataType": "enum", "enums": ["ALL"] }] },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.station.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/tripSearch',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        body: { "in": "body", "name": "body", "required": true, "ref": "TripSearchOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.tripSearch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/route',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        body: { "in": "body", "name": "body", "required": true, "ref": "TripSearchOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.route.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/journeyGeoPos',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        body: { "in": "body", "name": "body", "required": true, "ref": "JourneyGeoPosOptions" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.journeyGeoPos.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/hafas/v1/positionForTrain/:trainName',
    async (context: any, next: any) => {
      const args = {
        trainName: { "in": "path", "name": "trainName", "required": true, "dataType": "string" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.positionForTrain.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/hafas/v1/rawHafas',
    async (context: any, next: any) => {
      const args = {
        body: { "in": "body", "name": "body", "required": true, "dataType": "any" },
        profile: { "in": "query", "name": "profile", "ref": "AllowedHafasProfile" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new HafasController();

      const promise = controller.rawHafas.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/iris/v1/wings/:rawId1/:rawId2',
    async (context: any, next: any) => {
      const args = {
        rawId1: { "in": "path", "name": "rawId1", "required": true, "dataType": "string" },
        rawId2: { "in": "path", "name": "rawId2", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new IrisController();

      const promise = controller.wings.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/iris/v1/abfahrten/:evaId',
    async (context: any, next: any) => {
      const args = {
        evaId: { "in": "path", "name": "evaId", "required": true, "dataType": "string" },
        lookahead: { "in": "query", "name": "lookahead", "dataType": "double" },
        lookbehind: { "in": "query", "name": "lookbehind", "dataType": "double" },
        type: { "in": "query", "name": "type", "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["open"] }, { "dataType": "enum", "enums": ["default"] }] },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new IrisController();

      const promise = controller.abfahrten.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/iris/v1/station/:searchTerm',
    async (context: any, next: any) => {
      const args = {
        searchTerm: { "in": "path", "name": "searchTerm", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new IrisController();

      const promise = controller.station.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/iris/v1/stations',
    async (context: any, next: any) => {
      const args = {
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new IrisController();

      const promise = controller.stations.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/reihung/monitoring/wagen',
    async (context: any, next: any) => {
      const args = {
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new ReihungMonitoringController();

      const promise = controller.monitoring.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/reihung/v1/wagen/:trainNumber/:date',
    async (context: any, next: any) => {
      const args = {
        trainNumber: { "in": "path", "name": "trainNumber", "required": true, "dataType": "string" },
        date: { "in": "path", "name": "date", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new ReihungControllerV1();

      const promise = controller.wagenreihung.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/reihung/v1/trainName/:tz',
    async (context: any, next: any) => {
      const args = {
        tz: { "in": "path", "name": "tz", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new ReihungControllerV1();

      const promise = controller.trainName.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/reihung/v1/forTZ/:tz',
    async (context: any, next: any) => {
      const args = {
        tz: { "in": "path", "name": "tz", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new ReihungControllerV1();

      const promise = controller.forTZ.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/reihung/v1/forNumber/:number',
    async (context: any, next: any) => {
      const args = {
        number: { "in": "path", "name": "number", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new ReihungControllerV1();

      const promise = controller.forNumber.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/sbb/experimental/station/:searchTerm',
    async (context: any, next: any) => {
      const args = {
        searchTerm: { "in": "path", "name": "searchTerm", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new SBBExperimentalController();

      const promise = controller.station.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/api/sbb/experimental/routing',
    async (context: any, next: any) => {
      const args = {
        options: { "in": "body", "name": "options", "required": true, "ref": "RoutingOptions" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new SBBExperimentalController();

      const promise = controller.routing.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/station/v1/search/:searchTerm',
    async (context: any, next: any) => {
      const args = {
        ctx: { "in": "request", "name": "ctx", "required": true, "dataType": "object" },
        searchTerm: { "in": "path", "name": "searchTerm", "required": true, "dataType": "string" },
        type: { "in": "query", "name": "type", "ref": "StationSearchType" },
        max: { "in": "query", "name": "max", "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new StationController();

      const promise = controller.searchStation.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/station/v1/geoSearch',
    async (context: any, next: any) => {
      const args = {
        lat: { "in": "query", "name": "lat", "required": true, "dataType": "double" },
        lng: { "in": "query", "name": "lng", "required": true, "dataType": "double" },
        radius: { "in": "query", "name": "radius", "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new StationController();

      const promise = controller.geoSearch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/station/v1/iris/:evaId',
    async (context: any, next: any) => {
      const args = {
        evaId: { "in": "path", "name": "evaId", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new StationController();

      const promise = controller.irisSearch.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/station/v1/station/:evaId',
    async (context: any, next: any) => {
      const args = {
        evaId: { "in": "path", "name": "evaId", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new StationController();

      const promise = controller.stationDetails.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/api/station/v1/ds100/:ds100',
    async (context: any, next: any) => {
      const args = {
        ds100: { "in": "path", "name": "ds100", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context);
      } catch (error) {
        context.status = error.status;
        context.throw(error.status, JSON.stringify({ fields: error.fields }));
      }

      const controller = new StationController();

      const promise = controller.ds100.apply(controller, validatedArgs as any);
      return promiseHandler(controller, promise, context, next);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  function promiseHandler(controllerObj: any, promise: Promise<any>, context: any, next: () => Promise<any>) {
    return Promise.resolve(promise)
      .then((data: any) => {
        if (data || data === false) {
          context.body = data;
          context.status = 200;
        } else {
          context.status = 204;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        if (isController(controllerObj)) {
          const headers = controllerObj.getHeaders();
          Object.keys(headers).forEach((name: string) => {
            context.set(name, headers[name]);
          });

          const statusCode = controllerObj.getStatus();
          if (statusCode) {
            context.status = statusCode;
          }
        }
        return next();
      })
      .catch((error: any) => {
        context.status = error.status || 500;
        context.throw(context.status, error.message, error);
      });
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, context: any): any[] {
    const errorFields: FieldErrors = {};
    const values = Object.keys(args).map(key => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return context.request;
        case 'query':
          return validationService.ValidateParam(args[key], context.request.query[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "silently-remove-extras" });
        case 'path':
          return validationService.ValidateParam(args[key], context.params[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "silently-remove-extras" });
        case 'header':
          return validationService.ValidateParam(args[key], context.request.headers[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "silently-remove-extras" });
        case 'body':
          return validationService.ValidateParam(args[key], context.request.body, name, errorFields, undefined, { "noImplicitAdditionalProperties": "silently-remove-extras" });
        case 'body-prop':
          return validationService.ValidateParam(args[key], context.request.body[name], name, errorFields, 'body.', { "noImplicitAdditionalProperties": "silently-remove-extras" });
      }
    });
    if (Object.keys(errorFields).length > 0) {
      throw new ValidateError(errorFields, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa