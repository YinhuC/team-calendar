import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: { type: String, unique: true },
    accessToken: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group'}]
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
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    calendars: [{
        calendarId: String,
        user: [{type: Schema.Types.ObjectId, ref: 'User' }]
    }]
}, {
    timestamps: {}
});

export const Group = mongoose.model('Group', groupSchema);
