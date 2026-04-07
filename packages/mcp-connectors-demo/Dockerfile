FROM apify/actor-node:24

# Next, copy the source files using the user set
# in the base image.
COPY --chown=myuser:myuser . ./

# Install all dependencies. Don't audit to speed up the installation.
RUN npm install --include=dev --audit=false

# Run the image.
CMD ["npm", "run", "start"]