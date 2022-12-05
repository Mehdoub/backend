import mongoose from 'mongoose';

import basePlugin from '../helper/mongoose/base.plugin.js';
import User from './user.model.js';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            default: null
        },
        manager_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: User
        },
        is_active: {
            type: Boolean,
            default: 1
        },
        created_by: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: User
        }
    }
)



schema.plugin(basePlugin)

const Company = mongoose.model('companies', schema);

export default Company;
