import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

interface props {
  state: any;
  setState: any;
}

class Http {
  base_url = "https://api.github.com/";
  private client = axios.create({
    baseURL: this.base_url,
  });
  public async get_repos(props: props) {
    props.state = [];
    const response = await this.client.get("/users/mrafieefard/repos");
    for (const repo in response.data) {
      const repo_data = response.data[repo];
      if (!repo_data.disabled) {
        const commits = await this.client.get(
          `/repos/mrafieefard/${repo_data.name}/commits`
        );
        props.state.push({
          name: repo_data.name,
          description: repo_data.description,
          html_url: repo_data.html_url,
          commited_at: commits.data[0].commit.author.date,
        });
        
      }
    }
    props.setState(props.state);
    // props.state = []
    // this.client.get("/users/mrafieefard/repos").then((response) => {
    //   for (const repo in response.data) {
    //     const repo_data = response.data[repo];
    //     if (!repo_data.disabled) {
    //       this.client
    //         .get(`/repos/mrafieefard/${repo_data.name}/commits`)
    //         .then((commits) => {
    //           props.state.push({
    //             name: repo_data.name,
    //             description: repo_data.description,
    //             html_url: repo_data.html_url,
    //             commited_at: commits.data[0].commit.author.date,
    //           });
    //           props.setState(props.state);
    //         });
    //     }

    //     //
    //   }
    // });
  }
}

export default Http;
