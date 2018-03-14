
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const FootprintSchema = new Schema({
        avatar: { type: String  },
        openId: { type: String  },
        userName: { type: String  },
        time: { type: String  },
        media: { type: Array  },
        comment: { type: Array  },
        like: { type: Array  }
    },{collection: 'footprint'});

    return mongoose.model('Footprint', FootprintSchema);
};