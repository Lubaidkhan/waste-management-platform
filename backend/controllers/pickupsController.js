const Pickup = require('../models/pickup');
const asyncWrapper = require('../middleware/asyncWrapper');

const pickupsController = {
  getAllPickups: asyncWrapper(async (req, res, next) => {

    try {
        const pickups = await Pickup.find({ isDeleted: false }).sort({ date: 1 });
        res.status(200).send({ message: 'Pickups Fetched Successfully', pickups });
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal Server Error' });
      }

  }),

  createPickup: async (req, res) => {
   
      const newPickup = new Pickup(req.body);
      const result = await newPickup.save();
      res.status(200).send({ message: 'Pickup Added Successfully', result });
  },

  updatePickup: async (req, res) => {
   
    //   const { id } = req.params;
    //   const updatedPickup = await Pickup.findByIdAndUpdate(id, req.body, { new: true });
    //   res.json(updatedPickup);
    try {
        const updatedPickup = await Pickup.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        }).exec();
        if (!updatedPickup) {
          return res.status(404).json({ message: 'Pickup not found' });
        }
        res.status(200).json({ message: 'Pickup updated successfully', data: updatedPickup });
      } catch (error) {
        res.status(400).json({ message: 'Failed to update pickup', error: error.message });
      }

  },

  deletePickup: async (req, res) => {
   
    //   const { id } = req.params;
    //   await Pickup.findByIdAndDelete(id);
    //   res.json({ message: 'Pickup deleted successfully' });
    try {
        const deletedPickup = await Pickup.findByIdAndUpdate(
          req.params.id,
          { isDeleted: true },
          { new: true }
        );
        if (!deletedPickup) {
          return res.status(404).json({ message: 'Pickup not found' });
        }
        res.status(200).json({ message: 'Pickup deleted successfully', data: deletedPickup });
      } catch (error) {
        res.status(400).json({ message: 'Failed to delete pickup', error: error.message });
      }

  },
};

module.exports = pickupsController;
