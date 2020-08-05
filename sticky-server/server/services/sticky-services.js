import Sticky from '../models/sticky';

export const search = (params) =>{
    const promise = Sticky.find(params).exec();
    return promise;
};

export const save = (sticky) => {
    const newSticky = new Sticky(sticky);
    const promise = newSticky.save();
    return promise;
};

export const find = (id) => {
    const promise = Sticky.findById(id).exec();
    return promise;  
};

export const update = (id, newValues) => {
    newValues.lastModifiedDate = new Date();
    const promise = Sticky.findOneAndUpdate(
        {_id: id},
        newValues,
        {new: true}
    ).exec();
    return promise;
};


export const remove = (id) => {
    const promise = Sticky.remove({_id: id});
    return promise;
};