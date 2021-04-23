const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({ 
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  });
 
  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{model: Product}],
      });
      if (!tagData) {
        res.status(404).json({message: "There is no product found with that ID!"});
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
