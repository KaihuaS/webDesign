import mongoose from 'mongoose';

const StickySchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required."
    },
    content: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate:{
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

// StickySchema.virtual('id').get(() => {
//     return this._id.toHexString();
// });

// StickySchema.set('toJSON', {virtuals: true});


StickySchema.virtual('id').get(function() {
    return this._id.toHexString();
});

StickySchema.set('toJSON', { virtuals: true });

export default mongoose.model('Sticky', StickySchema);