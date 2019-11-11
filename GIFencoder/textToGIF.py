import pyqrcode
import imageio
import os

# This program splits a message into 6 slices, then encodes each slice within a qr code
# these slices are then used to create a GIF file
messageSlices = []
images = []
message = input("Message: ")

numSlices = int(input("Number of Slices (< length of message): "))
sliceLength = round(len(message) / numSlices)


# Split the message into numSlices slices
for i in range(numSlices):
    messageSlices.append(message[i * sliceLength: (i+1) * sliceLength])

# Create a list of QR codes then stitch them together into a gif
for piece in messageSlices:
    qr = pyqrcode.create(piece)
    qr.png("QR.png", scale=36, module_color=[214, 254, 254, 255],background=[0x00, 0x33, 0x66])
    images.append(imageio.imread("QR.png"))
    images.append(imageio.imread("QR.png"))
    images.append(imageio.imread("QR.png"))
    os.remove('QR.png')
imageio.mimsave('/Users/natanberehe/Desktop/GIFencoder/QRGIF.gif', images)
