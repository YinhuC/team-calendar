import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    token: Object,
    googleId: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
}, {
    timestamps: {}
});

userSchema.virtual('fullName')
    .get(function() { return `${this.firstName} ${this.lastName}`; })
    .set(function (value) {
        this.firstName = value.substr(0, value.indexOf(' '));
        this.lastName = value.substr(value.indexOf(' ') + 1);
    });

export const User = mongoose.model('User', userSchema);

const groupSchema = new Schema({
    name: { type: String, required: true },
    description: String, 
    members: [String], 
    calendars: [{
        calendarIds: [String],
        googleId: String,
    }]
}, {
    timestamps: {}
});

export const Group = mongoose.model('Group', groupSchema);
