import { request, response } from "express";
import * as stickyService from '../services/sticky-services';
import sticky from "../models/sticky";

const renderErrorResponse = (response) => {
    const callback = (error) => {
        if(error){
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return callback;
};

export const list = (request, response) => {
    const promise = stickyService.search({});
    promise.then((stickies) => {
        response.status(200);
        response.json(stickies);
    })   
    .catch(renderErrorResponse(response));
};

export const save = (request, response) => {
    const newSticky = Object.assign({}, request.body);
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };

    stickyService.save(newSticky)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

export const get = (request, response) => {
    const stickyId = request.params.id;
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    stickyService.find(stickyId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

export const update = (request, response) => {
    const stickyId = request.params.id;
    const newSticky = Object.assign({}, request.body);
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    stickyService.update(stickyId, newSticky)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

export const remove = (request, response) => {
    const stickyId = request.params.id;
    const resolve = () => {
        response.status(200);
        response.json({
            message: "Successfully Deleted!!!"
        });
    };
    stickyService.remove(stickyId)
        .then(resolve)
        .catch(renderErrorResponse(response));    
};