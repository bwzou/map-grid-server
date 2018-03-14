
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const JourneySchema = new Schema({
        name: { type: String  },
        destination: { type: String  },
        description: { type: String  },
        transportation: { type: String  },
        startTime: { type: String  },
        endTime: { type: String  },
        cost: { type: Number  },
        peopleAtmost: { type: Number  },
        peopleAtleast: { type: Number  },
        joinPeople: { type: Array  },
        isDone: { type: Boolean  }
    },{collection: 'journey'});

    return mongoose.model('Journey', JourneySchema);
};