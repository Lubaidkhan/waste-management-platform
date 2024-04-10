const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pickupType: {
    type: String,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  items: [{
    itemName: {
      type: String,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    itemDescription: {
      type: String,
      required: false,
    }
  }],
//   pickupStatus: {
//     type: String,
//     enum: ['scheduled', 'completed', 'canceled'],
//     default: 'scheduled',
//     required: true,
//   },
//   driverName: {
//     type: String,
//     required: false,
//   },
//   driverPhone: {
//     type: String,
//     required: false,
//   },
//   pickupImage: {
//     type: String,
//     required: false,
//   },
//   pickupNotes: {
//     type: String,
//     required: false,
//   },
//   pickupWeight: {
//     type: Number,
//     required: false,
//   },
//   pickupVolume: {
//     type: Number,
//     required: false,
//   },
//   pickupCategory: {
//     type: String,
//     required: false,
//   },
//   pickupFees: {
//     type: Number,
//     required: false,
//   },
//   pickupLocation: {
//     type: {
//       type: String,
//       enum: ['Point'],
//       required: true,
//     },
//     coordinates: {
//       type: [Number],
//       required: true,
//     },
//   },
//   pickupPriority: {
//     type: String,
//     required: false,
//   },
//   pickupConfirmation: {
//     type: Boolean,
//     default: false,
//     required: true,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true,
  }
});

pickupSchema.index({ pickupLocation: '2dsphere' });

const Pickup = mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;
