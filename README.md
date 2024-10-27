Frontend for Cloud Resume

Link to project: https://github.com/NishanthPrem/np_cloud_resume

Cloudfront: https://djyh4a4rxtaq4.cloudfront.net/

Static S3 URL (HTTP): http://np-cloud-resume.s3-website-us-west-1.amazonaws.com/

Tech Stack: HTML, CSS, JS

JS is used to call the lambda function which in return JSON output with the visit_count. The visitor count value is updated in the HTML.

CI/CD Using Github Actions
Automatic Deployment using github actions which copy the files to s3 and invalidate the cache in cloud front.
