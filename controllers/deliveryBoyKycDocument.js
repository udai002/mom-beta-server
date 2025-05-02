const KYCdoc_deliveryboy = require('../models/KYCdoc_deliveryboy');

const KycDocumentsAdd = async (req, res) => {
    try {
        const AdharPhoto = req.file ? `/uploads/${req.file.filename}` : null;
        const DrivingLicencePhoto = req.file ? `/uploads/${req.file.filename}` : null;
        const RCPhoto = req.file ? `/uploads/${req.file.filename}` : null;
        const PANPhoto = req.file ? `/uploads/${req.file.filename}` : null;

        const { Adharnumber,Adharverify,DrivingLicenceNumber,DrivingLicenceVerify,RCNumber,RCVerify,PANnumber,PANVerify } = req.body;

        // if (!name || !price || !quantity || !description || !expirydate || !imageUrl) {
        //     return res.status(400).json({ message: "All fields including image are required" });
        // }

        const kycDetails = new KYCdoc_deliveryboy({ Adharnumber,AdharPhoto,Adharverify,DrivingLicenceNumber,DrivingLicencePhoto,DrivingLicenceVerify,RCNumber,RCPhoto,RCVerify,PANnumber,PANPhoto,PANVerify });
        await kycDetails.save();

        res.status(201).json({ message: "kycDetails added successfully", data: kycDetails });
    } catch (error) {
        res.status(500).json({ message: "Error adding kycDetails", error: error.message });
    }
};

const getKycById = async (req, res) => {
    try {
        const kycById = await KYCdoc_deliveryboy.findById(req.params.id);
        if (!kycById) {
            return res.status(404).json({ message: "kycdetails not found" });
        }
        res.status(200).json(kycById);
    } catch (error) {
        res.status(500).json({ message: "Error fetching kycdetails", error: error.message });
    }
};

const getKyc = async(req, res)=>{
    try{
        const kyc=await KYCdoc_deliveryboy.find();
        if (!kyc){
            return res.status(404).json({message:"kycdetails not found"});
        }
        res.status(200).json(kyc);


    }catch(error){
        res.status(500).json({message:"Error fetching kycdetails",error:error.message});
    }
}




module.exports= {KycDocumentsAdd,getKycById,getKyc}